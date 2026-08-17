import sys
import zlib
import struct
from collections import deque

def main():
    # Read PPM
    with open('/tmp/orig_logo.ppm', 'rb') as f:
        header = f.readline()
        line = f.readline()
        while line.startswith(b'#'):
            line = f.readline()
        w, h = map(int, line.split())
        max_val = int(f.readline())
        raw = f.read()

    print(f"Loaded image: {w}x{h}, {len(raw)} bytes")

    # Step 1: Detect checkerboard pixels
    # In the fake checkerboard, all background pixels have very low chroma and high lightness
    bg_candidate = bytearray(w * h)
    for y in range(h):
        row_offset = y * w * 3
        for x in range(w):
            idx = row_offset + x * 3
            r = raw[idx]
            g = raw[idx + 1]
            b = raw[idx + 2]
            max_diff = max(abs(r - g), abs(g - b), abs(r - b))
            lum = (r + g + b) // 3
            # Gray square is ~216-220, white square is ~254-255
            # If lum >= 195 and max_diff <= 6, it is background
            if lum >= 195 and max_diff <= 6:
                bg_candidate[y * w + x] = 1

    # Step 2: Flood fill from image edges to find true exterior background
    visited = bytearray(w * h)
    is_bg = bytearray(w * h)
    queue = deque()

    # Enqueue top & bottom borders
    for x in range(w):
        if bg_candidate[x]:
            queue.append((x, 0))
            visited[x] = 1
        b_idx = (h - 1) * w + x
        if bg_candidate[b_idx]:
            queue.append((x, h - 1))
            visited[b_idx] = 1

    # Enqueue left & right borders
    for y in range(h):
        l_idx = y * w
        if bg_candidate[l_idx] and not visited[l_idx]:
            queue.append((0, y))
            visited[l_idx] = 1
        r_idx = y * w + (w - 1)
        if bg_candidate[r_idx] and not visited[r_idx]:
            queue.append((w - 1, y))
            visited[r_idx] = 1

    while queue:
        cx, cy = queue.popleft()
        is_bg[cy * w + cx] = 1
        for dx, dy in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < w and 0 <= ny < h:
                nidx = ny * w + nx
                if not visited[nidx] and bg_candidate[nidx]:
                    visited[nidx] = 1
                    queue.append((nx, ny))

    # Also flood fill any interior pockets that are background
    for y in range(h):
        for x in range(w):
            idx = y * w + x
            if not visited[idx] and bg_candidate[idx]:
                pocket = []
                visited[idx] = 1
                q2 = deque([(x, y)])
                while q2:
                    qx, qy = q2.popleft()
                    pocket.append((qx, qy))
                    for dx, dy in ((-1, 0), (1, 0), (0, -1), (0, 1)):
                        nx, ny = qx + dx, qy + dy
                        if 0 <= nx < w and 0 <= ny < h:
                            nidx = ny * w + nx
                            if not visited[nidx] and bg_candidate[nidx]:
                                visited[nidx] = 1
                                q2.append((nx, ny))
                for px, py in pocket:
                    is_bg[py * w + px] = 1

    # Step 3: Find bounding box of foreground (the logo itself)
    min_x, max_x = w, 0
    min_y, max_y = h, 0
    for y in range(h):
        for x in range(w):
            if not is_bg[y * w + x]:
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y

    print(f"Foreground BBox: X=[{min_x}, {max_x}], Y=[{min_y}, {max_y}]")
    
    # Add a small padding (e.g. 8px)
    pad = 8
    crop_x1 = max(0, min_x - pad)
    crop_x2 = min(w - 1, max_x + pad)
    crop_y1 = max(0, min_y - pad)
    crop_y2 = min(h - 1, max_y + pad)

    crop_w = crop_x2 - crop_x1 + 1
    crop_h = crop_y2 - crop_y1 + 1

    print(f"Cropped dimensions: {crop_w}x{crop_h}")

    # Step 4: Alpha matting & de-fringing
    # For every pixel in cropped region:
    # If is_bg -> Alpha = 0, RGB = (0,0,0)
    # If interior FG -> Alpha = 255, RGB = original RGB
    # If near boundary -> Compute smooth alpha and un-premultiply to remove gray/white halo
    out_rgba = bytearray(crop_w * crop_h * 4)

    for cy in range(crop_h):
        src_y = crop_y1 + cy
        for cx in range(crop_w):
            src_x = crop_x1 + cx
            src_idx = src_y * w + src_x
            src_pix = src_idx * 3
            r = raw[src_pix]
            g = raw[src_pix + 1]
            b = raw[src_pix + 2]

            out_idx = (cy * crop_w + cx) * 4

            if is_bg[src_idx]:
                out_rgba[out_idx] = 0
                out_rgba[out_idx + 1] = 0
                out_rgba[out_idx + 2] = 0
                out_rgba[out_idx + 3] = 0
                continue

            # Check if any neighbor is background
            bg_neighbor_lum = 0
            bg_neighbors = 0
            for dy in (-1, 0, 1):
                for dx in (-1, 0, 1):
                    if dx == 0 and dy == 0:
                        continue
                    nx = src_x + dx
                    ny = src_y + dy
                    if 0 <= nx < w and 0 <= ny < h:
                        nidx = ny * w + nx
                        if is_bg[nidx]:
                            bg_neighbors += 1
                            npix = nidx * 3
                            bg_neighbor_lum += (raw[npix] + raw[npix + 1] + raw[npix + 2]) / 3.0

            if bg_neighbors > 0:
                avg_bg_lum = bg_neighbor_lum / bg_neighbors
                lum = (r + g + b) / 3.0
                chroma = max(abs(r - g), abs(g - b), abs(r - b))

                # If luminance is lower than background, alpha increases as distance from bg increases
                lum_diff = max(0.0, avg_bg_lum - lum)
                # Alpha between 0.0 and 1.0
                alpha_norm = min(1.0, max(lum_diff / (avg_bg_lum * 0.4), chroma / 12.0))
                alpha_val = int(alpha_norm * 255)

                if alpha_val < 10:
                    out_rgba[out_idx] = 0
                    out_rgba[out_idx + 1] = 0
                    out_rgba[out_idx + 2] = 0
                    out_rgba[out_idx + 3] = 0
                else:
                    # Unmix the background color to avoid light/gray edges
                    bg_factor = (255 - alpha_val) / 255.0
                    unmixed_r = int(max(0, min(255, (r - bg_factor * avg_bg_lum) * (255.0 / alpha_val))))
                    unmixed_g = int(max(0, min(255, (g - bg_factor * avg_bg_lum) * (255.0 / alpha_val))))
                    unmixed_b = int(max(0, min(255, (b - bg_factor * avg_bg_lum) * (255.0 / alpha_val))))

                    out_rgba[out_idx] = unmixed_r
                    out_rgba[out_idx + 1] = unmixed_g
                    out_rgba[out_idx + 2] = unmixed_b
                    out_rgba[out_idx + 3] = alpha_val
            else:
                out_rgba[out_idx] = r
                out_rgba[out_idx + 1] = g
                out_rgba[out_idx + 2] = b
                out_rgba[out_idx + 3] = 255

    # Step 5: Save as valid uncompressed / zlib compressed PNG directly via Python
    def make_png(width, height, rgba_data):
        # PNG signature
        png = b'\x89PNG\r\n\x1a\n'

        # IHDR chunk
        ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
        ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data)
        png += struct.pack('>I', 13) + b'IHDR' + ihdr_data + struct.pack('>I', ihdr_crc)

        # IDAT chunk
        raw_scanlines = bytearray()
        bytes_per_row = width * 4
        for row in range(height):
            raw_scanlines.append(0) # Filter type 0 (None)
            start = row * bytes_per_row
            raw_scanlines.extend(rgba_data[start:start + bytes_per_row])

        compressed = zlib.compress(bytes(raw_scanlines), level=9)
        idat_crc = zlib.crc32(b'IDAT' + compressed)
        png += struct.pack('>I', len(compressed)) + b'IDAT' + compressed + struct.pack('>I', idat_crc)

        # IEND chunk
        iend_crc = zlib.crc32(b'IEND')
        png += struct.pack('>I', 0) + b'IEND' + struct.pack('>I', iend_crc)

        return png

    png_bytes = make_png(crop_w, crop_h, out_rgba)
    with open('public/logo.png', 'wb') as f:
        f.write(png_bytes)

    print(f"Successfully generated clean transparent PNG: {len(png_bytes)} bytes at public/logo.png")

if __name__ == '__main__':
    main()
