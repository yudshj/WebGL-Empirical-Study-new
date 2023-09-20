import multiprocessing as mp
import os
import pickle
from abc import abstractmethod
from pathlib import Path
from typing import Dict, List, Optional

import pandas as pd
import tqdm
from perfetto.trace_processor import TraceProcessor, TraceProcessorConfig

TRACE_PROCESSOR_PATH = (
    "/home/yudonghan/.local/share/perfetto/prebuilts/trace_processor_shell"
)
TRACE_OUTPUT_PATH = Path("output/performance")
DF_OUTPUT_DIR = Path("output/dataframe/")
PICKLE_OUTPUT_DIR = Path("output/pickle/")
DF_ZSTD_OUTPUT_NAME = "performance.pkl.zstd"
DF_CSV_OUTPUT_NAME = "performance.csv"

DF_OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
PICKLE_OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

COLUMNS = [
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


def get_parent_slices(df, row) -> pd.DataFrame:
    parent_slices = []
    while row.parent_id is not None:
        row = df.loc[row.parent_id]
        parent_slices.append(row)
    return pd.DataFrame(parent_slices)


def get_cpu_gpu_webgl_time(trace_path: Path) -> List[Optional[float] | str | Dict]:
    cpu_real = None
    cpu_full = None
    gpu_real = None
    gpu_full = None
    webgl_time = None
    status = "Ok"
    tpconfig = TraceProcessorConfig(bin_path=TRACE_PROCESSOR_PATH)
    tp = TraceProcessor(trace_path.as_posix(), config=tpconfig)
    mem_mean = {
        "Browser": None,
        "GPU Process": None,
        "Renderer": None,
        "Other": None,
    }
    mem_detail = None
    try:
        render_mainThread_startProfiling = tp.query(
            'SELECT * FROM slice WHERE name LIKE "%StartProfiling"'
        ).as_pandas_dataframe()

        render_mainThread_v8execute = tp.query(
            'SELECT * FROM slice WHERE name="v8.callFunction" AND dur > 0'
        ).as_pandas_dataframe()
        gpu_mainThread_slices_WebGL = tp.query(
            f'SELECT slice.* FROM slice JOIN process_track ON slice.track_id=process_track.id WHERE dur > 0 AND process_track.name LIKE "WebGL%";'
        ).as_pandas_dataframe()
        gpu_mainThread_slices_GPUTask = tp.query(
            'SELECT * FROM slice WHERE name="GPUTask" AND dur > 0'
        ).as_pandas_dataframe()

        # CPU time spent in V8.Execute (1e-9 秒)
        cpu_real = (
            render_mainThread_v8execute.thread_dur.sum()
            - render_mainThread_startProfiling.thread_dur.sum()
        ) / 1e9
        cpu_full = (
            render_mainThread_v8execute.dur.sum()
            - render_mainThread_startProfiling.dur.sum()
        ) / 1e9
        # GPU time spent in GPUTask (1e-9 秒)
        gpu_real = gpu_mainThread_slices_GPUTask.thread_dur.sum() / 1e9
        gpu_full = gpu_mainThread_slices_GPUTask.dur.sum() / 1e9

        process_df = tp.query(
            """SELECT 
    process.id,
    process.pid,
    process.name AS process_name,
    process_counter_track.id as track_id
FROM 
    process_counter_track
JOIN 
    process ON process.id = process_counter_track.upid
WHERE 
    process_counter_track.name = "chrome.private_footprint_kb"  """
        ).as_pandas_dataframe()
        _mem_mean = {
            "Browser": 0.0,
            "GPU Process": 0.0,
            "Renderer": 0.0,
            "Other": 0.0,
        }
        _mem_detail = {}
        for id, pid, process_name, track_id in process_df.values:
            memory_usage = tp.query(
                "SELECT value FROM counter WHERE track_id={}".format(track_id)
            ).as_pandas_dataframe()["value"] / (
                1024 * 1024
            )  # MB
            _mem_detail["{}_{}_{}".format(process_name, id, pid)] = memory_usage.values
            for name in _mem_mean.keys():
                if process_name.startswith(name):
                    _mem_mean[name] += memory_usage.mean()
                    break
            else:
                _mem_mean["Other"] += memory_usage.mean()
        mem_mean = _mem_mean
        mem_detail = _mem_detail

        if len(gpu_mainThread_slices_WebGL) != 0:
            webgl_time = gpu_mainThread_slices_WebGL.dur.sum() / 1e9
        else:
            status = "No WebGL"
    except Exception as e:
        print("error processing trace: ", trace_path)
        status = "Error"
    tp.close()
    return [
        status,
        cpu_real,
        cpu_full,
        gpu_real,
        gpu_full,
        webgl_time,
        mem_mean["Browser"],
        mem_mean["GPU Process"],
        mem_mean["Renderer"],
        mem_mean["Other"],
        mem_detail,
    ]


class HydDB:
    @abstractmethod
    def update(self, trace_path: Path) -> int:
        pass


class HydDataFrameDB(HydDB):
    df: pd.DataFrame

    def load(self, path: Path):
        if not os.path.exists(path):
            # raise Exception('output path not exists')
            self.df = pd.DataFrame(columns=COLUMNS, dtype=float)
            self.df["status"] = self.df["status"].astype("string")
            self.df["mem_detail"] = self.df["mem_detail"].astype("object")
        else:
            self.df = pd.read_pickle(path, compression="zstd")

    def update(self, trace_path: Path) -> int:
        idx = trace_path.stem
        if idx in self.df.index:
            # print("skip", idx)
            return 2
        try:
            info = get_cpu_gpu_webgl_time(trace_path)
            self.df.loc[idx, COLUMNS] = info
        except KeyboardInterrupt:
            print("KeyboardInterrupt")
            return -1
        except Exception as e:
            print(e)
            return 0
        return 1

    def save(self, out_dir: Path):
        # self.df.sort_index(inplace=True)
        self.df.to_pickle(out_dir / DF_ZSTD_OUTPUT_NAME, compression="zstd")
        self.df.drop(columns=["mem_detail"]).to_csv(out_dir / DF_CSV_OUTPUT_NAME)


def _pickle_update(trace_path: Path) -> int:
    idx = trace_path.stem
    output_dir = PICKLE_OUTPUT_DIR / idx
    output_pickle = output_dir / "{}.pkl".format(idx)
    if output_pickle.exists():
        # print("skip", idx)
        return 2
    error_path = output_dir / "error-{}.txt".format(idx)
    output_dir.mkdir(parents=True, exist_ok=True)
    try:
        info = get_cpu_gpu_webgl_time(trace_path)
        with open(output_pickle, "wb") as fp:
            pickle.dump(info, fp)
        if error_path.exists():
            error_path.unlink()
    except KeyboardInterrupt:
        print("KeyboardInterrupt")
        return -1
    except Exception as e:
        print(e)
        with open(error_path, "w") as fp:
            fp.write(str(e))
        return 0
    return 1


class HydPickleDB(HydDB):
    def update(self, trace_path: Path) -> int:
        return _pickle_update(trace_path)


def work(trace_list: List[Path]):
    db = HydPickleDB()
    for trace_path in tqdm.tqdm(trace_list):
        r = db.update(trace_path)
        if r == -1:
            break


def main():
    trace_list = sorted(TRACE_OUTPUT_PATH.glob("*.proto.gz"), key=lambda x: x.stem)
    # work(trace_list)
    with mp.Pool(32) as pool:
        pool.map(_pickle_update, trace_list)


if __name__ == "__main__":
    main()
