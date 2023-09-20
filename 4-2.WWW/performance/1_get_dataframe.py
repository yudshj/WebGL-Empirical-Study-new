import pickle
import pandas as pd
from pathlib import Path

d = {}
for p in sorted(Path('./output/pickle/').glob('*/*.pkl')):
    with p.open('rb') as fp:
        d[p.name] = pickle.load(fp)

INDEX = [
    "status",
    "cpu_real",
    "cpu_full",
    "gpu_real",
    "gpu_full",
    "webgl_time",
    "mem_mean_browser",
    "mem_mean_gpu_process",
    "mem_mean_renderer",
    "mem_mean_other",
    "mem_detail",
]

df = pd.DataFrame(d, index=INDEX).T
df.to_pickle('./output/df.pkl.zstd', compression='zstd')
