import base64
import json
import zlib
from pathlib import Path



def main():
    for path in sorted(Path('output/cap').glob('*.json')):
        process_file(path)

def process_file(path: Path):
    idx = path.stem
    cap = json.loads(path.read_bytes())
    for idx_frame, gl_captures in enumerate(cap['frame']['gl_captures']):
        if gl_captures['value']['data'] is None:
            print(f'{path} - {idx_frame} has no data')
            continue
        for idx_context, data in enumerate(gl_captures['value']['data']):
            filename = Path(f'traces/{idx}-{idx_frame}-{idx_context}.html')
            # if os.path.exists(filename):
            if filename.exists():
                print(f'{filename} exists')
                continue
            bytes = base64.b64decode(data[22:])
            filename.write_bytes(zlib.decompress(bytes))

if __name__ == '__main__':
    main()