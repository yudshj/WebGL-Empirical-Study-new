import scrapy
import scrapy.selector
import random

import logging

from pathlib import Path

from scrapy import Request
from scrapy.http import Response
from typing import Optional, List

from ..items import HtmlData, JavaScriptData

from datetime import datetime




class TrancoSpider(scrapy.Spider):
    name = "tranco"
    # start_urls = ['https://www.oppo.com/cn/smartphones/series-find-n/find-n/3d/']
    tranco_top1M_csv_path_str = "/storage/webgl/tranco/top-1m.csv"
    max_depth = 2
    max_width = 2

    def __init__(self, name=None, **kwargs):
        super().__init__(name, **kwargs)

    def start_requests(self):
        tranco_begin:int = self.settings.getint('TRANCO_BEGIN')
        tranco_end:int = self.settings.getint('TRANCO_END')
        tranco_top1M_csv_path = Path(self.tranco_top1M_csv_path_str)
        tranco_list: List[List[str]] = [x.strip().split(',') for x in tranco_top1M_csv_path.read_text().splitlines()]
        tranco_list = tranco_list[tranco_begin:tranco_end]
        # tranco_list = ['www.oppo.com']
        for idx, url in tranco_list:
            logging.info(f"seeding {url}")
            yield Request(url=f"http://{url}", callback=self.parse, meta={"cur_depth": 0, "idx": int(idx), "origin_url": f"<TRANCO-{idx}> - {url}"})

    def parse_js(self, response: Response):
        origin_url: str = response.meta.get('origin_url')
        if type(response.body) is bytes:
            keywords = {
                keyword: response.body.find(keyword.encode()) != -1
                for keyword in self.settings.getlist('KEYWORDS')
            }
        elif type(response.body) is str:
            keywords = {
                keyword: response.body.find(keyword) != -1
                for keyword in self.settings.getlist('KEYWORDS')
            }
        else:
            raise ValueError()

        yield JavaScriptData(
            access_time=datetime.utcnow(),
            idx=response.meta['idx'],
            url=response.url,
            keywords=keywords,
            referer=origin_url,
        )

    def parse(self, response: Response):
        origin_url: str = response.meta.get('origin_url')
        logging.info(f"parsing {response.url}")
        lst = response.xpath('//script')
        js_lst: list[str] = []
        # remote_js_dict: dict[str, Optional[str]] = {}
        # remote_js_count = 0
        remote_js_url_list: list[str] = []
        for item in lst:
            if 'src' in item.attrib:
                # remote_js_count += 1
                url: str = item.attrib.get('src')
                if not url.startswith('http'):
                    url = response.urljoin(url)

                # remote_js_dict[url] = f"{remote_js_count}.json"
                remote_js_url_list.append(url)

                yield scrapy.Request(
                    url=url,
                    callback=self.parse_js,  # lambda x: js_lst.append(x.body),
                    meta={'origin_url': response.url, "idx": response.meta['idx']},
                    priority=10,
                )
            else:
                js_lst.append(item.get())
                pass

        # Expanding
        next_depth = response.meta.get("cur_depth") + 1
        if next_depth <= self.max_depth:
            a_set = set(x.attrib.get('href') for x in response.xpath("//a"))
            a_set = set(x for x in a_set if x and (x.startswith("http") or x[0] == '/'))
            a_set = set(x if x.startswith("http") else response.urljoin(x) for x in a_set)

            if len(a_set) > 0:
                expand_list = random.choices(list(a_set), k=min(len(a_set), self.max_width))
                for url in expand_list:
                    yield Request(
                        url,
                        callback=self.parse,
                        meta={
                            "cur_depth": next_depth,
                            "idx": response.meta['idx'],
                            "origin_url": response.url
                        }
                    )

        # Yielding
        if type(response.body) is str:
            keywords = {
                keyword: response.body.find(keyword) != -1
                for keyword in self.settings.getlist('KEYWORDS')
            }
        elif type(response.body) is bytes:
            keywords = {
                keyword: response.body.find(keyword.encode()) != -1
                for keyword in self.settings.getlist('KEYWORDS')
            }
        else:
            raise ValueError()
        yield HtmlData(
            access_time=datetime.utcnow(),
            url=response.url,
            idx=response.meta['idx'],
            remote_js_url_list=remote_js_url_list,
            referer=origin_url,
            keywords=keywords,
        )
