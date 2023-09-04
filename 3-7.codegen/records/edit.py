from pathlib import Path

p = Path(__file__).parent

for i in p.iterdir():
    if len(i.name) == 8 or (not i.name.endswith(".ts")):
        continue
    new_name = '0' * (8 - len(i.name)) + i.name
    i.rename(i.parent / new_name)