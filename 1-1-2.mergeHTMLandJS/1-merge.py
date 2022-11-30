import json
import gzip
from pathlib import Path
from collections import defaultdict
import multiprocessing as mp
import logging
import IPython


OUTPUT_PATH = Path('output')
LAST_OUTPUT_PATH = Path('../1-1-1.urlCrawler/output')
HTML_PATH = LAST_OUTPUT_PATH / 'simplified_html.json'
JS_PATH = LAST_OUTPUT_PATH / 'simplified_js.json'

def give_me_logger(name: str, level: int = logging.INFO) -> logging.Logger:
    logger = logging.getLogger(name)
    logger.setLevel(level)
    handler = logging.StreamHandler()
    handler.setLevel(level)
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    handler.setFormatter(formatter)
    logger.addHandler(handler)
    return logger

def main():
    logger = give_me_logger("crawler_output")
    # html_lst = [json.loads(x) for x in HTML_PATH.read_text().splitlines()]
    # js_lst = [json.loads(x) for x in JS_PATH.read_text().splitlines()]
    pool = mp.Pool(mp.cpu_count())
    logger.info("Start to load json list")
    html_lst = pool.map(json.loads, HTML_PATH.read_text().splitlines())
    js_lst = pool.map(json.loads, JS_PATH.read_text().splitlines())
    logger.info("Finish loading json list")

    html_final = {x['url']: x for x in html_lst}
    js_url_dict = {x['url']: x for x in js_lst}

    for url, item in html_final.items():
        html_gl = (item['lit_used_webgl'] and item['lit_used_getcontext'])
        gl = html_gl
        remote_js_gl = {}

        for rurl in item['remote_js_url_list']:
            if rurl not in js_url_dict:
                remote_js_gl[rurl] = None
            else:
                remote_js_gl[rurl] = (js_url_dict[rurl]['lit_used_webgl'] and js_url_dict[rurl]['lit_used_getcontext'])
                gl = gl or remote_js_gl[rurl]

        item['html_gl'] = html_gl
        item['gl'] = gl
        item['remote_js_gl'] = remote_js_gl

        del item['remote_js_url_list']
        del item['lit_used_getcontext']
        del item['lit_used_webgl']
        del item['url']

    # with open(OUTPUT_PATH / 'merged_html_and_js.json', 'w') as fp:
    #     json.dump(html_gl_dict, fp)
    #
    with gzip.open(OUTPUT_PATH / 'html_final.json.gz', 'wt') as fp:
        json.dump(html_final, fp, indent=2)

    with gzip.open(OUTPUT_PATH / 'html_final_gl.json.gz', 'wt') as fp:
        json.dump({k: v for k, v in html_final.items() if v['gl']}, fp, indent=2)

if __name__ == '__main__':
    main()
