from pathlib import Path
import pandas as pd
import numpy as np
import datetime
# import matplotlib.pyplot as plt
# import matplotlib
import cv2



# output/2022-01-01
START = 0
END = 1578
IMG_PATH = Path('input/all/screenshot')
OUT_PATH = Path('output') / (datetime.datetime.now().strftime('%Y-%m-%d') + f'_{START}-{END}_output.pkl')

OUT_PATH.parent.mkdir(exist_ok=True, parents=True)


HELP = '''
'0' for 0, 1, 0, ''
's' for 0, 1, 0, 'scroll'
'1' for 0, 1, 1, ''
'2' for 0, 2, 1, ''
'3' for 0, 3, 0, ''
'4' for 0, 4, 0, ''
'e' for 1, None, None, None
'c' for 2, None, None, None
'b' for 3, None, None, None
'd' for 4, None, None, 'domain'
't' for None, None, None, 'TODO'
'''

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
                print(HELP)
                print("INDEX:", i)
                key = cv2.waitKey(0)
                try:
                    print('Key pressed:', chr(key))
                except:
                    print('Key pressed #hex:', key)
                if key == ord('0'):
                    df.loc[i] = [0, 1, 0, '']
                    break
                elif key == ord('s'):
                    df.loc[i] = [0, 1, 0, 'scroll']
                    break
                elif key == ord('1'):
                    df.loc[i] = [0, 1, 1, '']
                    break
                elif key == ord('2'):
                    df.loc[i] = [0, 2, 1, '']
                    break
                elif key == ord('3'):
                    df.loc[i] = [0, 3, 0, '']
                    break
                elif key == ord('4'):
                    df.loc[i] = [0, 4, 0, '']
                    break
                elif key == ord('e'):
                    df.loc[i] = [1, None, None, None]
                    break
                elif key == ord('c'):
                    df.loc[i] = [2, None, None, None]
                    break
                elif key == ord('b'):
                    df.loc[i] = [3, None, None, None]
                    break
                elif key == ord('d'):
                    df.loc[i] = [4, None, None, 'domain']
                    break
                elif key == ord('t'):
                    df.loc[i] = [None, None, None, 'TODO']
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