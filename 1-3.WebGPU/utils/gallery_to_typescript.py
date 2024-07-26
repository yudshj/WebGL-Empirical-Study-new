import pandas as pd
from pathlib import Path

df1 = pd.read_csv('./rambo/cssdesign_p1_p54.csv')
df2 = pd.read_csv('./rambo/cssdesign_p55_p108.csv')

df_cssdesign = pd.concat([df1, df2], axis=0)
df_cssdesign.to_excel('./rambo/cssdesign_p1_p108.xlsx', index=False)

poki_list = Path('./rambo/poki_urls.txt').read_text().split('\n')
poki_kids_list = Path('./rambo/poki_kids.txt').read_text().split('\n')
awwwards_list = Path('./rambo/awwwards_9.txt').read_text().split('\n')
cssdesign_list = df_cssdesign['url'].tolist()

ts_out = Path('./gallery.json')
with ts_out.open('w') as f:
    f.write('[\n')
    # example: ["POKI-0", "<URL>"],
    for i, url in enumerate(poki_list):
        f.write(f'  ["GALLERY-POKI-{i:04d}", "{url}"],\n')
    for i, url in enumerate(poki_kids_list):
        f.write(f'  ["GALLERY-POKI_KIDS-{i:04d}", "{url}"],\n')
    for i, url in enumerate(awwwards_list):
        f.write(f'  ["GALLERY-AWWWARDS-{i:04d}", "{url}"],\n')
    for i, url in enumerate(cssdesign_list):
        f.write(f'  ["GALLERY-CSSDESIGN-{i:04d}", "{url}"],\n')
    # skip the last comma
    f.seek(f.tell() - 2, 0)
    f.write('\n]\n')

print('Done!')