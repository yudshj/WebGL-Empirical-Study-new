import requests
import datetime
from pathlib import Path

OUT_PATH = Path('./awwwards_output') / datetime.datetime.now().strftime('%Y-%m-%d')
OUT_PATH.mkdir(exist_ok=True, parents=True)

def get_page(page: int):
    url = 'https://www.awwwards.com/websites/webgl/?page=' + str(page)
    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Connection': 'keep-alive',
        'DNT': '1',
        'Referer': 'https://www.awwwards.com/websites/webgl/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.50',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Microsoft Edge";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 404:
        return None
    return response.text

def main():
    page = 0
    while True:
        print('page:', page)
        html = get_page(page)
        if not html:
            break
        with open(OUT_PATH / f'page_{page}.html', 'w') as f:
            f.write(html)
        page += 1

if __name__ == '__main__':
    main()