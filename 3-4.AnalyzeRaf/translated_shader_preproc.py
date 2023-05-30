from multiprocessing import Pool
import pandas as pd
import gzip
import json
import os
import jq
import pickle
import re
from collections import defaultdict

from pathlib import Path

p = Path('../2-9.playwright/output/')
oses = ['win', 'mac', 'linux']
imr = Path('imr')
DATE='0527'

def process_json(i):
    for os in oses:
        json_path = imr / f'raf-{os}' / '{:05d}.json'.format(i)
        gz_path = p / f'raf-{os}' / '{:05d}.json.gz'.format(i)
        if not json_path.exists() or json_path.stat().st_size == 0:
            try:
                with gzip.open(gz_path, 'rt') as fi:
                    with open(json_path, 'wt') as fo:
                        fo.write(jq.compile('del(.. | .rafList?)').input(text=fi.read()).text())
            except Exception as e:
                pass

def extract_hlsl(s):
    try:
        pattern = r"// INITIAL HLSL BEGIN\n*(.*?)\n*// INITIAL HLSL END"
        match = re.search(pattern, s, re.DOTALL)

        return match.group(1)
    except Exception as e:
        print(e)
        return s
    
def extract_shaders(path, os):
    try:
        maghsk = jq.compile('.. | objects | select(.maghsk?) | .maghsk | {shaders, programs}').input(text=path.read_text()).all()
        shaders_list = []
        global_program_id = 0
        for context_id, context in enumerate(maghsk):
            tmp = {}
            for shader in context['shaders']:
                tmp[shader['id']] = {
                    'idx_url': path.stem,
                    'idx_context': context_id,
                    'idx_program': None,
                    'os': os,
                    'source': shader['source'],
                    'translatedSource': shader['translatedSource'] if os != 'win' else extract_hlsl(shader['translatedSource']),
                    'type': 'vertex' if shader['type'] == 35633 else 'fragment',
                }
            for program in context['programs']:
                for x in program['shaders']:
                    tmp[x]['idx_program'] = global_program_id
                global_program_id += 1
            shaders_list.extend(tmp.values())
        return shaders_list
    except Exception as e:
        print(path)
        # raise e
        return None
    
def main():
    for os in oses:
        (imr / f'raf-{os}').mkdir(parents=True, exist_ok=True)
    processes = 24  # Number of parallel processes to run
    pool = Pool(processes)
    # Use multiprocessing to parallelize the loop
    pool.map(process_json, range(29242))

    # Close the pool of processes
    pool.close()
    pool.join()
    print("Done #1")


    tmp_results = []
    # results = defaultdict(dict)
    results = []
    pool = Pool(processes)
    for os in oses:
        for path in (imr / f'raf-{os}').glob('*.json'):
            r = pool.apply_async(extract_shaders, args=(path, os))
            tmp_results.append((path.stem, os, r))
        #     break
        # break
    for a, b, r in tmp_results:
        tmp = r.get()
        # print(tmp)
        if tmp is not None:
            results.append(pd.DataFrame(tmp))
    pool.close()
    pool.join()
    results = pd.concat(results, ignore_index=True)
    results.to_pickle(imr / f'{DATE}-translated_shader_preproc.pkl.zst', compression='zstd')
    # print(results)
    # with open(imr / 'translated_shader_preproc.json', 'wt') as f:
    #     json.dump(results, f)
    # with open(imr / 'translated_shader_preproc.pkl', 'wb') as f:
    #     pickle.dump(results, f)
    print("Done #2")

if __name__ == '__main__':
    main()