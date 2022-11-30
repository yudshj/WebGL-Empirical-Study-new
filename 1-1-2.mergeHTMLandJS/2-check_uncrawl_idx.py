import json
import gzip
from pathlib import Path
from collections import defaultdict
import multiprocessing as mp
import logging
import tqdm
# import IPython

with gzip.open("output/html_final.json.gz", 'rt') as fp:
    html_final = json.load(fp)

counter = defaultdict(int)

for url, item in tqdm.tqdm(html_final.items()):
    all_js_crawled: bool = all(gl is not None for gl in item['remote_js_gl'].values())
    if all_js_crawled:
        counter[item['idx']] += 1

with open('output/idxCounter.json', 'w') as fp:
    json.dump(counter, fp)

# IPython.embed()