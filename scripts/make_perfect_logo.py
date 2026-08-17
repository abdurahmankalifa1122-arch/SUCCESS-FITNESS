import sys
import zlib
import struct
from collections import deque

def process_image(ppm_path, out_png_path):
    with open(ppm_path, 'rb') as f:
        header = f.readline()
        line = f.readline()
        while line.startswith(b'#'):
            line = f.readline()
        w, h = map(int, line.split())
        max_val = int(f.readline())
        raw = f.read()

    print(f"Loaded image {ppm_path}: {w}x{h}")

    # Find foreground bounding box
    min_x, max_x = w, 0
    min_y, max_y = h, 0
    for y in range(h):
        for x in range(w):
            idx = (y * w + x) * 3
            r, g, b = raw[idx], raw[idx + 1], raw[idx + 2]
            lum = (r + g + b) / 3.0
            chroma = max(abs(r - g), abs(g - b), abs(r - b))
            if lum > 40 or chroma > 14:
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y

    print(f"Foreground BBox: X=[{min_x}, {max_x}], Y=[{min_y}, {max_y}]")

    # Add margin
    pad = 16
    crop_x1 = max(0, min_x - pad)
    crop_x2 = min(w - 1, max_x + pad)
    crop_y1 = max(0, min_y - pad)
    crop_y2 = min(h - 1, max_y + pad)

    crop_w = crop_x2 - crop_x1 + 1
    crop_h = crop_y2 - crop_y1 + 1
    print(f"Cropped dimensions: {crop_w}x{crop_h}")

    out_rgba = bytearray(crop_w * crop_h * 4)

    for cy in range(crop_h):
        src_y = crop_y1 + cy
        for cx in range(crop_w):
            src_x = crop_x1 + cx
            src_idx = (src_y * w + src_x) * 3
            r, g, b = raw[src_idx], raw[src_idx + 1], raw[src_idx + 2]
            lum = (r + g + b) / 3.0
            chroma = max(abs(r - g), abs(g - b), abs(r - b))

            out_idx = (cy * crop_w + cx) * 4

            # If it's background
            if lum < 32 and chroma < 12:
                out_rgba[out_idx] = 0
                out_rgba[out_idx + 1] = 0
                out_rgba[out_idx + 2] = 0
                out_rgba[out_idx + 3] = 0
            else:
                # Soft alpha falloff on edge pixels
                alpha = min(1.0, max(0.0, (lum - 28) / 35.0) + (chroma / 12.0))
                alpha = min(1.0, max(0.0, alpha))
                alpha_byte = int(alpha * 255)

                if alpha_byte < 15:
                    out_rgba[out_idx] = 0
                    out_rgba[out_idx + 1] = 0
                    out_rgba[out_idx + 2] = 0
                    out_rgba[out_idx + 3] = 0
                else:
                    out_rgba[out_idx] = r
                    out_rgba[out_idx + 1] = g
                    out_rgba[out_idx + 2] = b
                    out_rgba[out_idx + 3] = alpha_byte

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
    print(f"Saved {out_png_path} ({len(png_bytes)} bytes)")

if __name__ == '__main__':
    process_image('/tmp/fit_logo.ppm', 'public/logo.png')
