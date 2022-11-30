# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy
from dataclasses import dataclass
from datetime import datetime
from typing import Optional, List, Dict

@dataclass
class JavaScriptData:
    url: str
    idx: int
    referer: str
    access_time: Optional[datetime]
    keywords: Optional[Dict[str, bool]]


@dataclass
class HtmlData:
    url: str
    idx: int
    referer: str
    access_time: Optional[datetime]
    keywords: Optional[Dict[str, bool]]

    remote_js_url_list: Optional[List[str]]
