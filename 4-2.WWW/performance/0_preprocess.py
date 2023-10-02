import multiprocessing as mp
import os
import pickle
from abc import abstractmethod
from pathlib import Path
from typing import Dict, List, Optional

import pandas as pd
import tqdm
from perfetto.trace_processor import TraceProcessor, TraceProcessorConfig

OS = 'mac-15s'

TRACE_PROCESSOR_PATH = "/home/yudonghan/.local/share/perfetto/prebuilts/trace_processor_shell"
TRACE_OUTPUT_PATH = Path(f"./input/performance-{OS}")

DF_OUTPUT_DIR = Path("./output/dataframe/")
PICKLE_OUTPUT_DIR = Path("./output/pickle/")
DF_ZSTD_OUTPUT_NAME = f"performance-{OS}-0924.pkl.zstd"
DF_CSV_OUTPUT_NAME = f"performance-{OS}-0924.csv"

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


def get_parent_slices(df, row) -> pd.DataFrame:
    parent_slices = []
    while row.parent_id is not None:
        row = df.loc[row.parent_id]
        parent_slices.append(row)
    return pd.DataFrame(parent_slices)


def get_cpu_gpu_webgl_time(trace_path: Path) -> List[Optional[float] | str | Dict | list[int]]:
    cpu_real = None
    cpu_full = None
    gpu_real = None
    gpu_full = None
    dropped_frame_duration = None
    frames_count = None
    webgl_time = None
    status = "Ok"
    tpconfig = TraceProcessorConfig(bin_path=TRACE_PROCESSOR_PATH)
    tp = TraceProcessor(trace_path.as_posix(), config=tpconfig)
    # mem_mean = {
    #     "Browser": None,
    #     "GPU Process": None,
    #     "Renderer": None,
    #     "Other": None,
    # }
    # mem_detail = None
    try:
        # render_mainThread_startProfiling = tp.query(
        #     'SELECT * FROM slice WHERE name LIKE "%StartProfiling"'
        # ).as_pandas_dataframe()

        ts_max = tp.query('SELECT ts FROM slice').as_pandas_dataframe().ts.max()
        ts_left = ts_max - 11_000_000_000
        ts_right = ts_left + 10_000_000_000

        cpu_utility = tp.query('''
        SELECT IMPORT("experimental.slices");
        SELECT
            dur as dur,
            thread_dur as thread_dur
        FROM experimental_slice_with_thread_and_process_info
        WHERE name = 'RunTask' AND thread_name = 'CrRendererMain' AND ts >= {} AND ts <= {}
        '''.format(ts_left, ts_right)).as_pandas_dataframe().dropna()

        gpu_utility = tp.query('''
        SELECT IMPORT("experimental.slices");
        SELECT
            dur as dur,
            thread_dur as thread_dur
        FROM experimental_slice_with_thread_and_process_info
        WHERE name = 'RunTask' AND thread_name = 'CrGpuMain' AND ts >= {} AND ts <= {}
        '''.format(ts_left, ts_right)).as_pandas_dataframe().dropna()

        # js_mainThread_v8execute = tp.query(
        #     'SELECT * FROM slice WHERE name="FunctionCall" AND dur >= 0 AND ts >= {} AND ts <= {}'.format(ts_left, ts_right)
        # ).as_pandas_dataframe()
        # render_mainThread_v8execute = tp.query(
        #     'SELECT * FROM slice WHERE name="UpdateLayer" AND dur >= 0 AND ts >= {} AND ts <= {}'.format(ts_left, ts_right)
        # ).as_pandas_dataframe()
        gpu_mainThread_slices_WebGL = tp.query(
            'SELECT slice.* FROM slice JOIN process_track ON slice.track_id=process_track.id WHERE ts >= {} AND ts <= {} AND dur >= 0 AND process_track.name LIKE "WebGL%";'.format(ts_left, ts_right)
        ).as_pandas_dataframe()
        # gpu_mainThread_slices_GPUTask = tp.query(
        #     'SELECT * FROM slice WHERE name="GPUTask" AND dur >= 0 AND ts >= {} AND ts <= {}'.format(ts_left, ts_right)
        # ).as_pandas_dataframe()
        dropped_frame_duration_df = tp.query(
            "SELECT id as id, dur as dur, name as name, ts FROM slice WHERE dur >= 0 AND name = 'DroppedFrameDuration' AND ts >= {} AND ts <= {}".format(ts_left, ts_right)
        ).as_pandas_dataframe()
        frames_df = tp.query('''
            SELECT
                ts as ts,
                dur as dur,
                process_track.upid as pid
            FROM slice
            JOIN process_track ON slice.track_id=process_track.id
            WHERE dur >= 0 AND slice.name = 'SendBeginMainFrameToCommit' AND ts >= {} AND ts <= {}
        '''.format(ts_left, ts_right)).as_pandas_dataframe()
        frames_count = frames_df.drop_duplicates().groupby('pid')['ts'].count().to_list()

        # CPU time spent in V8.Execute (1e-9 秒)
        cpu_real = cpu_utility.thread_dur.sum() / 1e9
        cpu_full = cpu_utility.dur.sum() / 1e9
        # render_real = (
        #     render_mainThread_v8execute.thread_dur.sum()
        # ) / 1e9
        # render_full = (
        #     render_mainThread_v8execute.dur.sum()
        # ) / 1e9
        # GPU time spent in GPUTask (1e-9 秒)
        gpu_real = gpu_utility.thread_dur.sum() / 1e9
        gpu_full = gpu_utility.dur.sum() / 1e9
        if dropped_frame_duration_df.shape[0] == 0:
            dropped_frame_duration = -1
        else:
            dropped_frame_duration = dropped_frame_duration_df.dur.sum() / 1e9

        # process_df = tp.query('''
        #     SELECT 
        #         process.id,
        #         process.pid,
        #         process.name AS process_name,
        #         process_counter_track.id as track_id
        #     FROM 
        #         process_counter_track
        #     JOIN 
        #         process ON process.id = process_counter_track.upid
        #     WHERE 
        #         process_counter_track.name = "chrome.private_footprint_kb"
        # ''').as_pandas_dataframe()
        # _mem_mean = {
        #     "Browser": 0.0,
        #     "GPU Process": 0.0,
        #     "Renderer": 0.0,
        #     "Other": 0.0,
        # }
        # _mem_detail = {}
        # for id, pid, process_name, track_id in process_df.values:
        #     memory_usage = tp.query(
        #         "SELECT value FROM counter WHERE track_id={}".format(track_id)
        #     ).as_pandas_dataframe()["value"] / (
        #         1024 * 1024
        #     )  # MB
        #     _mem_detail["{}_{}_{}".format(process_name, id, pid)] = memory_usage.values
        #     for name in _mem_mean.keys():
        #         if process_name.startswith(name):
        #             _mem_mean[name] += memory_usage.mean()
        #             break
        #     else:
        #         _mem_mean["Other"] += memory_usage.mean()
        # mem_mean = _mem_mean
        # mem_detail = _mem_detail

        if len(gpu_mainThread_slices_WebGL) != 0:
            webgl_time = gpu_mainThread_slices_WebGL.dur.sum() / 1e9
        else:
            status = "No WebGL"
    except Exception as e:
        print("error processing trace: ", trace_path)
        status = "Error"
        print(e)
    tp.close()
    return [
        status,
        cpu_real,
        cpu_full,
        gpu_real,
        gpu_full,
        webgl_time,
        dropped_frame_duration,
        frames_count,
        # mem_mean["Browser"],
        # mem_mean["GPU Process"],
        # mem_mean["Renderer"],
        # mem_mean["Other"],
        # mem_detail,
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
    DF_OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PICKLE_OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    trace_list = sorted(TRACE_OUTPUT_PATH.glob("*.proto.gz"), key=lambda x: x.stem)
    # work(trace_list)
    with mp.Pool(32) as pool:
        pool.map(_pickle_update, trace_list)


if __name__ == "__main__":
    main()
