import gzip
import json
import pickle
import tqdm
from pathlib import Path
import pandas as pd
a = Path('./input/raf/')
d = {}
for record in tqdm.tqdm(sorted(a.glob("*.json.gz"))):
    j = json.loads(gzip.open(record).read().decode('utf-8'))
    d[record.name] = j
df = pd.DataFrame(d).T
df.index = df.index.map(lambda x: int(x[:5]))
df.to_pickle('output/df_raf-win-0924.pkl.zstd', compression='zstd')