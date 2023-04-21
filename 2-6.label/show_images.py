from pathlib import Path
import pandas as pd
import numpy as np
import datetime
import cv2



START = 0
END = 1578
IMG_PATH = Path('input/all/screenshot')
OUT_PATH = Path('output') / (datetime.datetime.now().strftime('%Y-%m-%d') + f'_{START}-{END}_output.pkl')

OUT_PATH.parent.mkdir(exist_ok=True, parents=True)

COLUMNS = ['key', 'error', '用况', '交互', 'comments']

DICT = {
    ord('0'): [0, 1, 0, ''],
    ord('s'): [0, 1, 0, 'scroll'],
    ord('1'): [0, 1, 1, ''],
    ord('2'): [0, 2, 1, ''],
    ord('3'): [0, 3, 0, ''],
    ord('4'): [0, 4, 0, ''],
    ord('e'): [1, None, None, None],
    ord('c'): [2, None, None, None],
    ord('b'): [3, None, None, None],
    ord('d'): [4, None, None, 'domain'],
    ord('w'): [0, 1, 1, 'waiting'],
    ord('t'): [None, None, None, 'TODO'],
}

def print_help():
    print('<error> := 0: no error, 1: http error, 2: cloudflare 验证, 3: 白屏/黑屏, 4: 域名错误')
    print('<用况> := 1: 渲染, 2: 加速计算, 3: 未知, 4: 追踪')
    print('\t'.join(COLUMNS))
    for k,v in DICT.items():
        print(chr(k) + '\t' + '\t'.join([str(x) for x in v]))

def main():
    df = pd.DataFrame(columns=['error', 'use_case', 'need_interactions', 'comments'])

    df['error'] = df['error'].astype('Int64')
    df['use_case'] = df['use_case'].astype('Int64')
    df['need_interactions'] = df['need_interactions'].astype('Int64')
    df['comments'] = df['comments'].astype('string')
    i = START
    lst = []
    while i <= END:
        increment = True
        p = IMG_PATH / f'{i:05d}.png'
        if p.exists():
            img = cv2.imread(str(p))
            cv2.imshow('image', img)
            # imshow() and wait for keyborad input

            # ax.imshow(img)
            # plt.show(block=False)
            while True:
                # print(lst)
                print_help()
                print("INDEX:", i)
                key = cv2.waitKey(0)
                try:
                    print('Key pressed:', chr(key))
                except:
                    print('Key pressed #hex:', key)
                if key in DICT:
                    df.loc[i] = DICT[key]
                    break
                elif key == ord('z'):
                    if len(lst) == 0:
                        i = START
                    else:
                        i = lst.pop()
                    increment = False
                    break
            if increment:
                lst.append(i)
        else:
            print(f'File not found: {p}')
            df.loc[i] = [None, None, None, 'File not found']
        
        df.to_pickle(OUT_PATH)
        if increment:
            i += 1
        
        
if __name__ == '__main__':
    main()