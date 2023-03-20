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
import base64
import os

import trio
# from trio_cdp import open_cdp, page, dom, tracing
from selenium.webdriver.chrome.webdriver import WebDriver
from selenium.webdriver.common.bidi.cdp import CdpSession
from selenium.webdriver.common.devtools.v110 import tracing, io

# from browsermobproxy import Server


# TRACE_CONFIG = json.load(open('all_traceconfig.json', 'r'))
TRACE_CONFIG = json.load(open('partial_traceconfig.json', 'r'))
TRACE_CONFIG_1 = {
    # "stream_compression": tracing.StreamCompression.NONE,
    "stream_compression": tracing.StreamCompression.GZIP,
    "stream_format": tracing.StreamFormat.PROTO,
    # "stream_format": tracing.StreamFormat.JSON,
    "transfer_mode": "ReturnAsStream",
    "trace_config": tracing.TraceConfig.from_json(TRACE_CONFIG)
}

USE_HAR = False
TMP_USER_DATA_DIR = Path(tempfile.gettempdir()) / "userDataDir"
TMP_PROFILE_DIR = Path(tempfile.gettempdir()) / "profileDir"
BROWSERMOB_PATH = Path.home() / '.local/share/browsermob-proxy-2.1.4/bin/browsermob-proxy'
DRIVER_PATH = Path.home() / 'Downloads' / 'chromedriver_mac64' / 'chromedriver'
CHROME_PATH = '/Applications/Chromium.app/Contents/MacOS/Chromium'

URL_LIST_FILE, NAME = ('ok_urls.txt', 'ok')

START, END, STEP = (0, None, 1)

# OUT_PATH = Path.home() / '.tmpdisk' / 'OUTPUT'
OUT_PATH = Path('/Volumes/OUTPUT')
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

CR_OPTIONS = [
    'disable-gpu-sandbox',
    'disable-web-security',
    'disable-logging',
    'no-sandbox',
    'no-default-browser-check',
    'no-first-run',
    'ignore-certificate-errors',
    'log-level=3',
    'force-fieldtrials=*BackgroundTracing/default/',
    'enable-unsafe-webgpu',
    'enable-gpu-service-tracing',
    'enable-gpu-client-tracing',
]

logger = logging.getLogger('main')
handler = logging.StreamHandler()
handler.setFormatter(logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s'))
handler.setLevel(logging.DEBUG)
logger.addHandler(handler)
logger.setLevel(logging.INFO)


def countdown(sec):
    for i in range(sec, 0, -1):
        print(f'等待 {i} 秒...')
        time.sleep(1)


async def trace_callback(listener):
    async for event in listener:
        print(event)


async def get_trace(driver: WebDriver, countdown_seconds: int=10) -> bytes:
    ret = b''
    async with driver.bidi_connection() as conn:
        session: CdpSession = conn.session
        devtools = conn.devtools
        listener_complete = session.listen(devtools.tracing.DataCollected, devtools.tracing.TracingComplete)
        await session.execute(devtools.tracing.start(**TRACE_CONFIG_1))
        countdown(countdown_seconds)
        await session.execute(devtools.tracing.end())
        tracing_complete_event: tracing.TracingComplete = await listener_complete.receive()
        handler = tracing_complete_event.stream
        
        while True:
            obj = await session.execute(io.read(handle=handler))
            base64Encoded, data, feof = obj
            if feof: break
            assert base64Encoded
            ret += base64.b64decode(data)

    return ret


def main():
    global START, END, STEP

    if NAME == 'tranco':
        url_list = ['http://' + x.strip().split(',')[1] for x in open(URL_LIST_FILE, 'r')]
    else:
        url_list = [x.strip() for x in open(URL_LIST_FILE, 'r')]
    idx_url_list = list(enumerate(url_list))[START:END:STEP]

    fp = open('result.txt', 'a')

    cr_options = webdriver.ChromeOptions()
    for option in CR_OPTIONS:
        cr_options.add_argument(option)

    # if USE_HAR:
    #     server.start()
    #     proxy = server.create_proxy(params = {'httpProxy': 'localhost:7890'})
    #     cr_options.add_argument(f'proxy-server={proxy.proxy}')

    cr_options.binary_location = CHROME_PATH
    # cr_options.add_argument('enable-tracing-output=' + out_trace)
    for idx, url in tqdm.tqdm(idx_url_list):
        if TRACE_CONFIG_1['stream_format'] == tracing.StreamFormat.JSON:
            out_trace = (SELENIUM_OUT_PATH / f'{idx}_{NAME}.json.gz').absolute().as_posix()
        elif TRACE_CONFIG_1['stream_format'] == tracing.StreamFormat.PROTO:
            out_trace = (SELENIUM_OUT_PATH / f'{idx}_{NAME}.proto.gz').absolute().as_posix()
        for i in range(1):
            try:
                browser = webdriver.Chrome(executable_path=DRIVER_PATH, options=cr_options)
                browser.set_window_size(1440, 900)
                browser.set_page_load_timeout(10.0)
                try:
                    browser.get(url)
                except selenium.common.exceptions.TimeoutException:
                    pass
                category = input("类别? 如果有多个，可以用英文逗号分隔 [1: 渲染, 21: 一般加速计算, 22: 机器学习, 3: 成人内容, 4: 未知（看上去没用）]")
                trace_proto_blob : bytes = trio.run(get_trace, browser, 30)
                with open(out_trace, 'wb') as f_out:
                    f_out.write(trace_proto_blob)
                fp.write(f'{idx}\t{url}\t{category}\t{out_trace}\n')
                fp.flush()
                break
            except Exception as e:
                logger.error(url)
                logger.error(e)
                print(e.with_traceback())
        else:
            logger.error(f'failed to get {url}')
            continue

        browser.close()
        logger.info("browser closed")
        # os.remove(out_trace)

        break

    fp.close()


if __name__ == '__main__':
    main()
