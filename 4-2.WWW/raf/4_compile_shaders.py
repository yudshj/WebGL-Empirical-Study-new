import multiprocessing as mp
import subprocess as sp
import tempfile as tmp
from typing import Literal, Optional, Tuple

import pandas as pd
from tqdm import tqdm

NAGA = '/home/yudonghan/.cargo/bin/naga'
ANGLE = '/home/yudonghan/.local/bin/angle_shader_translator'
SPVAS = '/usr/bin/spirv-as'

def naga_compile(shader: str, type: Literal['vert', 'frag']) -> Tuple[str, bytes, bytes, int, Optional[str]]:
    with tmp.NamedTemporaryFile(suffix='.' + type) as tmpfile:
        with tmp.NamedTemporaryFile(mode='r+b', suffix='.wgsl') as tmpfile2:
            cmd = [NAGA, tmpfile.name, tmpfile2.name]
            process = sp.Popen(cmd, stdout=sp.PIPE, stderr=sp.PIPE)
            stdout, stderr = process.communicate()
            code = process.wait()
            wgsl = tmpfile2.read().decode()
            return ' '.join(cmd), stdout, stderr, code, wgsl

def angle_webgl_compile(shader: str, type: Literal['vert', 'frag'], webgl_version: Literal[1, 2]) -> Tuple[str, bytes, bytes, int, Optional[str]]:
    swarg = '-s=w' if webgl_version == 1 else '-s=w2'
    with tmp.NamedTemporaryFile(suffix='.' + type) as tmpfile:
        tmpfile.write(shader.encode())
        tmpfile.flush()
        cmd = [ANGLE, swarg, '-b=v', '-o', '-u', tmpfile.name]
        process = sp.Popen(cmd, stdout=sp.PIPE, stderr=sp.PIPE)
        stdout, stderr = process.communicate()
        code = process.wait()
    if code != 0:
        return ' '.join(cmd), stdout, stderr, code, None
    t = stdout.splitlines()
    begin = t.index(b'#### BEGIN COMPILER 0 OBJ CODE ####')
    end = t.index(b'#### END COMPILER 0 OBJ CODE ####')
    spirv_asm = b'\n'.join(t[begin + 1: end])

    cmd = [SPVAS, '-o', '-', '-']
    with tmp.NamedTemporaryFile(suffix='.spv') as tmpfile:
        process = sp.Popen(cmd, stdout=tmpfile, stderr=sp.PIPE, stdin=sp.PIPE)
        _, stderr = process.communicate(input=spirv_asm)
        code = process.wait()
        if code != 0:
            return ' '.join(cmd), stdout, stderr, code, None
        
        tmpfile.flush()
        with tmp.NamedTemporaryFile(mode='r+b', suffix='.wgsl') as tmpfile2:
            cmd = [NAGA, tmpfile.name, tmpfile2.name]
            process = sp.Popen(cmd, stdout=sp.PIPE, stderr=sp.PIPE)
            stdout, stderr = process.communicate()
            code = process.wait()
            if code != 0:
                return ' '.join(cmd), stdout, stderr, code, None
            tmpfile2.seek(0)
            wgsl = tmpfile2.read().decode()
    return ' '.join(cmd), stdout, stderr, code, wgsl

def getall(index_source_type: Tuple[int, str, Literal['vert', 'frag']]):
    idx, source, type = index_source_type
    naga_result = naga_compile(source, type)
    angle_naga_webgl1_result = angle_webgl_compile(source, type, 1)
    angle_naga_webgl2_result = angle_webgl_compile(source, type, 2)
    return [idx, type, source, naga_result, angle_naga_webgl1_result, angle_naga_webgl2_result]


def main():
    df_c = pd.read_pickle('./output/1_df_b_shaders-win-0924.pkl.zstd', compression='zstd')
    df_p = pd.read_pickle('../performance/output/df_performance-win-0924.pkl.zstd', compression='zstd')
    idx = df_p[df_p['status'] == 'Ok'].index
    df = df_c[df_c.index_webapp.isin(idx)].copy()
    df['type'] = df['type'].map(lambda x: 'vert' if x > 35632.5 else 'frag')
    df.to_pickle('./output/df_shaders_joined-win-0924.pkl.zstd', compression='zstd')

    inputs = [[row.Index, row.source, row.type] for row in df.itertuples()]

    with mp.Pool(32) as pool:
        results = list(tqdm(pool.imap_unordered(getall, inputs), total=len(inputs)))

if __name__ == '__main__':
    main()