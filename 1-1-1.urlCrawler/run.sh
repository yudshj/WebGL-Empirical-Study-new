#!/bin/bash

cd webgl
echo "scrapy crawl tranco -s TRANCO_BEGIN=$1 -s TRANCO_END=$2 -s LOG_FILE=/storage/webgl/output/scrapy-info_$1-$2.log"
$HOME/.local/bin/scrapy crawl tranco -s TRANCO_BEGIN=$1 -s TRANCO_END=$2 -s LOG_FILE=/storage/webgl/output/scrapy-info_$1-$2.log
