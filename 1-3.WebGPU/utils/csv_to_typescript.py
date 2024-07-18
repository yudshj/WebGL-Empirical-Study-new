from pathlib import Path

tranco = Path("tranco_PNXVJ-1m-20240718.csv")
output = Path("tranco.ts")

# ["TRANCO-0", "https://www.funtech.inc/en"]]
with open(tranco, "r") as f:
    fp = open(output, "w")
    fp.write("export const tranco = [\n")
    for line in f:
        x, y = line.strip().split(",")
        fp.write(f'  ["TRANCO-{x}", "http://{y}"],\n')
    fp.write("];\n")
    fp.close()