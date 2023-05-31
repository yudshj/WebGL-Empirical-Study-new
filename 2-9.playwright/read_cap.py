import zlib
# import sys
import json
import base64
from pathlib import Path

def main():
    # path = Path(sys.argv[1])
    for path in sorted(Path('output/cap').glob('*.json')):
    # for path in sorted(Path('output/').glob('*.json')):
        process_file(path)

def process_file(path):
    idx = path.stem
    # frame.gl_captures[].value.data[]
    with open(path, 'r', encoding='utf-8') as f:
        cap = json.load(f)
        for idx_frame, gl_captures in enumerate(cap['frame']['gl_captures']):
            if gl_captures['value']['data'] is None:
                print(f'{path} - {idx_frame} has no data')
                continue
            for idx_context, data in enumerate(gl_captures['value']['data']):
                bytes = base64.b64decode(data[22:])
                decompressed = zlib.decompress(bytes)
                with open(f'traces/{idx}-{idx_frame}-{idx_context}.html', 'wb') as f:
                    f.write(decompressed)


if __name__ == '__main__':
    main()