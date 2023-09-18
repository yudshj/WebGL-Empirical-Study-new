import gzip
import json
import pickle
import tqdm
from pathlib import Path
import pandas as pd
a = Path('/home/yudonghan/WebGL-Empirical-Study-new/3-4.AnalyzeRaf/output/raf/')
d = {}
for record in tqdm.tqdm(sorted(a.glob("*.json.gz"))):
    j = json.loads(gzip.open(record).read().decode('utf-8'))
    d[record.name] = j
pd.DataFrame(d).T.to_pickle('df_raf-0916.pkl.zstd', compression='zstd')