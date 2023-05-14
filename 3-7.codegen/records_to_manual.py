from pathlib import Path
import sys

def main():
    if len(sys.argv) > 1:
        out_path = Path(sys.argv[1])
        fp = out_path.open('w', encoding='utf-8')
    else:
        fp = sys.stdout
    records_path = Path('records')
    fp.write('import { Page } from "@playwright/test";\n\nexport const manual = {\n')
    for p in records_path.glob('*.ts'):
        idx = p.stem
        txt = p.read_text(encoding='utf-8').splitlines()
        start_print = False
        results = []
        for line in txt:
            if line.startswith("test("):
                start_print = True
                results.append("'%s': async (page: Page) => {" % idx)
                continue
            if start_print:
                if line.startswith("});"):
                    results.append("},\n")
                elif 'page.goto' not in line:
                    results.append(line)
        if len(results) > 2:
            fp.write("\n".join(results))
    fp.write("};\n")
    fp.close()

if __name__ == '__main__':
    main()