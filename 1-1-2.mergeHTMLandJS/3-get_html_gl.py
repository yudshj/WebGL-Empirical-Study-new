import json
import time
import logging
import gzip
from pathlib import Path

def give_me_logger(name: str, level: int = logging.INFO) -> logging.Logger:
    logger = logging.getLogger(name)
    logger.setLevel(level)
    handler = logging.StreamHandler()
    handler.setLevel(level)
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    handler.setFormatter(formatter)
    logger.addHandler(handler)
    return logger

def main():
    logger = give_me_logger(__name__)
    output_path = Path('output')
    start = time.time()
    with gzip.open(output_path / 'html_final_gl.json.gz', 'rt') as fp:
        data = json.load(fp)
    end = time.time()
    logger.info(f"Load time: {end - start}")

    hfp = open(output_path / "html_url_list.txt", 'w')
    afp = open(output_path / "any_url_list.txt", 'w')
    for k, v in data.items():
        if v['html_gl']:
            hfp.write(k + '\n')
        if v['gl']:
            afp.write(k + '\n')
    hfp.close()
    afp.close()
    logger.info("done.")


if __name__ == '__main__':
    main()
