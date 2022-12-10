#!/bin/bash
export NEEDRESTART_MODE=a
sudo apt update
sudo NEEDRESTART_MODE=a apt -y install python3 rsync python3-pip jq ipython3 ripgrep exa tmux
python3 -m pip install --upgrade pip
python3 -m pip install scrapy selenium selenium-wire tqdm

sudo mkdir /storage
sudo chown -R ubuntu:ubuntu /storage
mkdir -p /storage/webgl/jobdir
mkdir -p /storage/webgl/output
mkdir -p /storage/webgl/tranco
# mkdir -p /storage/webgl/src

rsync -aP ./1-1-1.urlCrawler/tranco/ /storage/webgl/tranco/