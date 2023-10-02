import pickle
import pandas as pd
from pathlib import Path

OS = 'mac-15s'
d = {}
for p in sorted(Path('./output/pickle/').glob('*/*.pkl')):
    with p.open('rb') as fp:
        d[p.name] = pickle.load(fp)

COLUMNS = [
    "status",
    "cpu_real",
    "cpu_full",
    "gpu_real",
    "gpu_full",
    "webgl_time",
    "dropped_frame_duration",
    "frames_count",
    # "mem_mean_browser",
    # "mem_mean_gpu_process",
    # "mem_mean_renderer",
    # "mem_mean_other",
    # "mem_detail",
]

df = pd.DataFrame(d, index=COLUMNS).T
df = df.astype({
    "status": 'category',
    "cpu_real": float,
    "cpu_full": float,
    "gpu_real": float,
    "gpu_full": float,
    "webgl_time": float,
    "dropped_frame_duration": float,
    "frames_count": object,
    # "mem_mean_browser": float,
    # "mem_mean_gpu_process": float,
    # "mem_mean_renderer": float,
    # "mem_mean_other": float,
    # "mem_detail": object,
})
df.index = df.index.map(lambda x: int(x[:5]))
df.to_pickle(f'./output/df_performance-{OS}-0924.pkl.zstd', compression='zstd')
