from pathlib import Path

tranco = Path("tranco_PNXVJ-1m-20240718.csv")
output = Path("tranco.json")

# ["TRANCO-0", "https://www.funtech.inc/en"]]
with open(tranco, "r") as f:
    fp = open(output, "w")
    fp.write("[\n")
    for line in f:
        x, y = line.strip().split(",")
        fp.write(f'  ["TRANCO-{x}", "http://{y}"],\n')
    fp.seek(fp.tell() - 2, 0)
    fp.write('\n]\n')