from seleniumwire import webdriver
from pathlib import Path
import selenium.common
import json
import logging
import gzip
import tqdm

PROXY = "socks5://ss.maghsk.site:3535"
CR_OPTIONS = [
    '--headless',
    f'--proxy-server={PROXY}'
]

# logger = logging.getLogger

OUT_PATH = Path("../output")
SELENIUM_OUT_PATH = OUT_PATH / 'selenium'

SELENIUM_OUT_PATH.mkdir(exist_ok=True, parents=True)

logger = logging.getLogger('main')
logger.setLevel(logging.INFO)

def main():
    # url_list = [
    #     'https://www.oppo.com/cn/smartphones/series-find-n/find-n/3d/',
    #     'https://webglsamples.org/aquarium/aquarium.html',
    #     'https://www.qq.com/',
    # ]
    url_list = open(OUT_PATH / 'url_list.txt', 'r').read().splitlines()
    inject_js_str = open('inject.js', 'rt').read()

    cr_options = webdriver.ChromeOptions()
    for option in CR_OPTIONS:
        cr_options.add_argument(option)
    browser = webdriver.Chrome(options=cr_options)
    browser.execute_cdp_cmd('Page.addScriptToEvaluateOnNewDocument', {'source': inject_js_str})
    browser.implicitly_wait(30.0)
    browser.set_page_load_timeout(30.0)

    logger.info("browser loaded")

    for idx, url in tqdm.tqdm(enumerate(url_list)):
        logger.info(f"[LOOP {idx:03d}]   shimming url {url}")
        url_id = url.split('/')[2]
        output = get_captured_webgl_functions(browser, url)

        with gzip.open(SELENIUM_OUT_PATH / f'{url_id}-capturedWebGLFunctions.json.gz', 'wt') as fp:
            fp.write(output)
        logger.info("done")

    browser.close()

    logger.info("browser closed")

    # captured = json.loads(output)
    # browser.execute_script('window.stop();')
    # with gzip.open(f'../output/{url_id}-capturedWebGLFunctions.pkl.gz', 'wb') as fp:
    #     pickle.dump(captured, fp)

def get_captured_webgl_functions(browser, url) -> str:
    try:
        browser.get(url)
    except selenium.common.exceptions.TimeoutException as e:
        logger.info('TimeoutException when loading url: %s', url)
    return browser.execute_script('return getJSONCapturedWebGLFunctions();')


if __name__ == '__main__':
    main()