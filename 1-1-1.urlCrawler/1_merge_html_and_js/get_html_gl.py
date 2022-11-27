import json
import time
import logging

start = time.time()
with open('../output/html_final_gl.json', 'r') as fp:
    data = json.load(fp)
end = time.time()
logging.info(f"Load time: {end - start}")

hfp = open("../output/html_url_list.txt", 'w')
afp = open("../output/any_url_list.txt", 'w')
for k, v in data.items():
    if v['html_gl']:
        hfp.write(k + '\n')
    if v['gl']:
        afp.write(k + '\n')