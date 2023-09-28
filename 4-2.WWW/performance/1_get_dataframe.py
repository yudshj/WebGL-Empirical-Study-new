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
    "dropped_frame_duration",
    "frames_count",
    "mem_mean_browser",
    "mem_mean_gpu_process",
    "mem_mean_renderer",
    "mem_mean_other",
    "mem_detail",
]

df = pd.DataFrame(d, index=INDEX).T
df = df.astype({
    "status": 'category',
    "cpu_real": float,
    "cpu_full": float,
    "gpu_real": float,
    "gpu_full": float,
    "webgl_time": float,
    "dropped_frame_duration": float,
    "frames_count": float,
    "mem_mean_browser": float,
    "mem_mean_gpu_process": float,
    "mem_mean_renderer": float,
    "mem_mean_other": float,
    "mem_detail": object,
})
df.index = df.index.map(lambda x: int(x[:5]))
df.to_pickle('./output/df_performance-win-0924.pkl.zstd', compression='zstd')
