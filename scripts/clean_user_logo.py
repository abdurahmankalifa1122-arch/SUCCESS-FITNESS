import zlib
import struct
import math

def clean_and_make_transparent(ppm_path, out_png_path):
    with open(ppm_path, 'rb') as f:
        header = f.readline()
        line = f.readline()
        while line.startswith(b'#'):
            line = f.readline()
        w, h = map(int, line.split())
        max_val = int(f.readline())
        raw = f.read()

    print(f"Loaded image: {w}x{h}")

    # Bounding box detection
    min_x, max_x = w, 0
    min_y, max_y = h, 0

    is_bg = bytearray(w * h)

    for y in range(h):
        for x in range(w):
            idx = y * w + x
            c_idx = idx * 3
            r, g, b = raw[c_idx], raw[c_idx + 1], raw[c_idx + 2]
            lum = (r + g + b) / 3.0
            chroma = max(abs(r - g), abs(g - b), abs(r - b))

            if lum >= 195 and chroma <= 18:
                is_bg[idx] = 1
            else:
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y

    print(f"Artwork BBox: X=[{min_x}, {max_x}] (w={max_x-min_x+1}), Y=[{min_y}, {max_y}] (h={max_y-min_y+1})")

    # Add 12px margin
    pad = 12
    crop_x1 = max(0, min_x - pad)
    crop_x2 = min(w - 1, max_x + pad)
    crop_y1 = max(0, min_y - pad)
    crop_y2 = min(h - 1, max_y + pad)

    crop_w = crop_x2 - crop_x1 + 1
    crop_h = crop_y2 - crop_y1 + 1
    print(f"Final transparent canvas: {crop_w}x{crop_h}")

    out_rgba = bytearray(crop_w * crop_h * 4)

    for cy in range(crop_h):
        src_y = crop_y1 + cy
        for cx in range(crop_w):
            src_x = crop_x1 + cx
            src_idx = src_y * w + src_x
            c_idx = src_idx * 3
            out_idx = (cy * crop_w + cx) * 4

            if is_bg[src_idx]:
                out_rgba[out_idx] = 0
                out_rgba[out_idx + 1] = 0
                out_rgba[out_idx + 2] = 0
                out_rgba[out_idx + 3] = 0
            else:
                r = raw[c_idx]
                g = raw[c_idx + 1]
                b = raw[c_idx + 2]
                lum = (r + g + b) / 3.0
                chroma = max(abs(r - g), abs(g - b), abs(r - b))

                # Smooth edge anti-aliasing against background
                if lum > 190 and chroma <= 22:
                    # Edge transition pixel
                    alpha = max(0.0, min(1.0, 1.0 - (lum - 180.0) / 25.0))
                    alpha_byte = int(alpha * 255)
                    if alpha_byte < 10:
                        out_rgba[out_idx] = 0
                        out_rgba[out_idx + 1] = 0
                        out_rgba[out_idx + 2] = 0
                        out_rgba[out_idx + 3] = 0
                    else:
                        out_rgba[out_idx] = r
                        out_rgba[out_idx + 1] = g
                        out_rgba[out_idx + 2] = b
                        out_rgba[out_idx + 3] = alpha_byte
                else:
                    out_rgba[out_idx] = r
                    out_rgba[out_idx + 1] = g
                    out_rgba[out_idx + 2] = b
                    out_rgba[out_idx + 3] = 255

    # PNG encoder
    def make_png(width, height, rgba_data):
        png = b'\x89PNG\r\n\x1a\n'
        ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
        ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data)
        png += struct.pack('>I', 13) + b'IHDR' + ihdr_data + struct.pack('>I', ihdr_crc)

        raw_scanlines = bytearray()
        bytes_per_row = width * 4
        for row in range(height):
            raw_scanlines.append(0)
            start = row * bytes_per_row
            raw_scanlines.extend(rgba_data[start:start + bytes_per_row])

        compressed = zlib.compress(bytes(raw_scanlines), level=9)
        idat_crc = zlib.crc32(b'IDAT' + compressed)
        png += struct.pack('>I', len(compressed)) + b'IDAT' + compressed + struct.pack('>I', idat_crc)

        iend_crc = zlib.crc32(b'IEND')
        png += struct.pack('>I', 0) + b'IEND' + struct.pack('>I', iend_crc)
        return png

    png_bytes = make_png(crop_w, crop_h, out_rgba)
    with open(out_png_path, 'wb') as f:
        f.write(png_bytes)
    print(f"Successfully wrote {out_png_path}: {crop_w}x{crop_h} ({len(png_bytes)} bytes)")

if __name__ == '__main__':
    clean_and_make_transparent('/tmp/logo_inspect.ppm', 'public/logo.png')
