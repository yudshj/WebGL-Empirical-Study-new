#!/bin/bash

cd webgl
echo "scrapy crawl tranco -s TRANCO_BEGIN=$1 -s TRANCO_END=$2"
scrapy crawl tranco -s TRANCO_BEGIN=$1 -s TRANCO_END=$2