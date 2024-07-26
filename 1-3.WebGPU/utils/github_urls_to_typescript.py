from pathlib import Path

webgl = Path('../github/github_webgl_urls.txt')
webgpu = Path('../github/github_webgpu_urls.txt')

ts_out = Path('./github.json')
with ts_out.open('w') as f:
    f.write('[\n')
    for i, url in enumerate(webgl.read_text().split('\n')):
        f.write(f'  ["GITHUB-WEBGL-{i:04d}", "{url}"],\n')
    for i, url in enumerate(webgpu.read_text().split('\n')):
        f.write(f'  ["GITHUB-WEBGPU-{i:04d}", "{url}"],\n')
    f.seek(f.tell() - 2, 0)
    f.write('\n]\n')