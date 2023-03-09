from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait
from pathlib import Path
from typing import Tuple, List, Any, Dict
import selenium.common
import gzip
import logging
import tempfile
import tqdm
import pandas as pd
import time
import json
import sys
import os
from browsermobproxy import Server

USE_HAR = False
TMP_USER_DATA_DIR = Path(tempfile.gettempdir()) / "userDataDir"
TMP_PROFILE_DIR = Path(tempfile.gettempdir()) / "profileDir"
BROWSERMOB_PATH = Path.home() / '.local/share/browsermob-proxy-2.1.4/bin/browsermob-proxy'

URL_LIST_FILE, NAME = ('ok_urls.txt', 'ok')

START, END, STEP = (0, None, 1)

OUT_PATH = Path("/Users/hanyd/.tmpdisk/OUTPUT")
# OUT_PATH = Path("output")
SELENIUM_OUT_PATH = OUT_PATH / 'tracing'
SELENIUM_OUT_PATH.mkdir(exist_ok=True, parents=True)

if len(sys.argv) > 1:
    START = int(sys.argv[1])
if len(sys.argv) > 2:
    END = int(sys.argv[2])
if len(sys.argv) > 3:
    STEP = int(sys.argv[3])
if END == -1:
    END = None

TRACE_CONFIG = json.load(open('trace.config', 'r'))

CR_OPTIONS = [
    # 'disable-features=IsolateOrigins,site-per-process',
    'disable-gpu-sandbox',
    'disable-web-security',
    'ignore-certificate-errors',
    'no-sandbox',
    'no-default-browser-check',
    'no-first-run',

    # 'trace-config-file=/Users/hanyd/Code/Python/w1/2-5.shaderToy/traceconfig.json',
    # 'trace-startup-record-mode=record-continuously',
    # 'trace-startup-file=/Users/hanyd/.tmpdisk/OUTPUT/tracing/0_ok.json',
    # 'trace-smb-size=1048576',

    'trace-startup=base,benchmark,blink,browser,cc,cpu_profiler,disabled-by-default-cpu_profiler.debug,disabled-by-default-cpu_profiler,disabled-by-default-gpu_cmd_queue,disabled-by-default-gpu.dawn,disabled-by-default-gpu.debug,disabled-by-default-gpu.decoder,disabled-by-default-gpu.device,disabled-by-default-gpu.service,disabled-by-default-ipc.flow,disabled-by-default-memory-infra.v8.code_stats,disabled-by-default-memory-infra,disabled-by-default-mojom,disabled-by-default-toplevel.flow,disabled-by-default-toplevel.ipc,disabled-by-default-v8.cpu_profiler,gpu.angle,gpu,gpu.capture,ipc,loading,log,memory,mojom,navigation,native,net,netlog,scheduler,sequence_manager,toplevel.flow,toplevel,ui,v8.execute,v8.wasm,v8,views,viz,devtools.timeline,devtools.contrast,devtools,disabled-by-default-devtools.timeline.stack,disabled-by-default-devtools.timeline.picture,disabled-by-default-devtools.timeline.layers,disabled-by-default-devtools.timeline.invalidationTracking,disabled-by-default-devtools.timeline.inputs,disabled-by-default-devtools.timeline.frame,disabled-by-default-devtools.timeline,-*',
    'trace-startup-record-mode=record-until-full',
    'trace-startup-format=json',
    'trace-startup-duration=300',
    # 'proxy-server=http://ss.maghsk.site:3435',

    'enable-gpu',
    # 'enable-gpu-blocked-time',
    'enable-gpu-client-tracing',
    'enable-gpu-service-tracing',
]

logger = logging.getLogger('main')
handler = logging.StreamHandler()
handler.setFormatter(logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s'))
handler.setLevel(logging.INFO)
logger.addHandler(handler)
logger.setLevel(logging.INFO)
server = Server(BROWSERMOB_PATH)


def main():
    global START, END, STEP

    if NAME == 'tranco':
        url_list = ['http://' + x.strip().split(',')[1] for x in open(URL_LIST_FILE, 'r')]
    else:
        url_list = [x.strip() for x in open(URL_LIST_FILE, 'r')]
    idx_url_list = list(enumerate(url_list))[START:END:STEP]

    for idx, url in tqdm.tqdm(idx_url_list):
        cr_options = webdriver.ChromeOptions()
        for option in CR_OPTIONS:
            cr_options.add_argument(option)

        if USE_HAR:
            server.start()
            proxy = server.create_proxy(params = {'httpProxy': 'localhost:7890'})
            cr_options.add_argument(f'proxy-server={proxy.proxy}')

        out_trace = (SELENIUM_OUT_PATH / f'{idx}_{NAME}.json').absolute().as_posix()
        # TRACE_CONFIG['result_file'] = out_trace
        # json.dump(TRACE_CONFIG, open('traceconfig.json', 'w'))
        cr_options.add_argument('trace-startup-file=' + out_trace)

        for i in range(3):
            try:
                browser = webdriver.Chrome(executable_path='/Users/hanyd/Downloads/chromedriver_mac64/chromedriver', options=cr_options)
                browser.set_window_size(1440, 900)

                # https://www.selenium.dev/documentation/webdriver/waits/
                # browser.set_script_timeout(10.0)
                browser.set_page_load_timeout(30.0)

                browser.get(url)
                while (not os.path.exists(out_trace)) or os.path.getsize(out_trace) == 0:
                    time.sleep(5)
                time.sleep(10)
                browser.close()
                break
            except Exception as e:
                logger.error(url)
                logger.error(e)
        else:
            logger.error(f'failed to get {url}')
            os.remove(out_trace)
            continue

        logger.info("browser closed")
        # os.system('gzip ' + out_trace)
        # gzip out_trace
        with open(out_trace, 'rb') as f_in:
            with gzip.open(out_trace + '.gz', 'wb') as f_out:
                f_out.write(f_in.read())
        os.remove(out_trace)


if __name__ == '__main__':
    main()
