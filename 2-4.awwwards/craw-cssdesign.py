import requests
import datetime
import bs4
from lxml import etree
from pathlib import Path

OUT_PATH = Path('./cssdesign') / datetime.datetime.now().strftime('%Y-%m-%d')
OUT_PATH.mkdir(exist_ok=True, parents=True)
XPATH = '/html/body/div[1]/section/div/div[1]/article[*]/div/div[1]/div/a[2]'

def get_page(page: int):
    url = 'https://www.cssdesignawards.com/website-gallery?feature=WebGL&page=' + str(page)
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
    soup = bs4.BeautifulSoup(response.content, 'html.parser')
    html = etree.HTML(str(soup))
    return [i.attrib['href'] for i in html.xpath(XPATH)]
    

def main():
    with open(OUT_PATH / 'urls.txt', 'w') as f:
        for page in range(90):
            print('page:', page)
            lst = get_page(page)
            if not lst:
                break
            f.write('\n'.join(lst))
            f.flush()

if __name__ == '__main__':
    main()