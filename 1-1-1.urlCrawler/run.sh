#!/bin/bash

cd webgl
echo "scrapy crawl tranco -s TRANCO_BEGIN=$1 -s TRANCO_END=$2"
$HOME/.local/bin/scrapy crawl tranco -s TRANCO_BEGIN=$1 -s TRANCO_END=$2