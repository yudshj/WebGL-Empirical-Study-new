const { chromium } = require('playwright');
const fs = require('fs');
const child_process = require("child_process");

const idx_url: Array<Array<String>> = JSON.parse(fs.readFileSync('input/0422.json', 'utf8'));

fs.mkdirSync('output/har', { recursive: true });

const total = idx_url.length;

const PART = parseInt(process.argv[2]);
const TOTAL_PART = parseInt(process.argv[3]);
const PART_SIZE = Math.ceil(total / TOTAL_PART);
const START = PART * PART_SIZE;
const END = Math.min((PART + 1) * PART_SIZE, total);

(async () => {
    for (const element of idx_url.slice(START, END)) {
        const idx = element[0];
        const url = element[1];
        console.info(`${START.toString().padStart(5, '0')}/${idx}/${END}`);
        const zstd_out_path = `output/har/${idx}.har.zst`;
        const error_out_path = `output/har/${idx}.error.txt`;
        if (fs.existsSync(zstd_out_path) || fs.existsSync(error_out_path)) {
            console.info(`Skip ${idx} - ${url}`);
        } else {
            const browser = await chromium.launch({
                ignoreHTTPSErrors: true,
                proxy: {
                    server: 'socks5://ss.maghsk.site:3536',
                    bypass: 'localhost,127.0.0.1'
                },
                headless: true,
                launchOptions: {
                    args: [
                        "--enable-gpu",
                        "--use-gl=desktop",
                        "--enable-unsafe-webgpu",
                    ]
                }
            });
            try {
                const har_out_path = `/tmp/${idx}.har`;
                const context = await browser.newContext( { ignoreHTTPSErrors: true, recordHar: { content: 'embed', path: har_out_path } } );
                const page = await context.newPage();
                await page.goto(url, {waitUntil: 'domcontentloaded', timeout: 30_000}).catch(() => {});
                await page.waitForTimeout(10000);
                await page.waitForLoadState('networkidle', {timeout: 30_000}).catch(() => {});
                await page.waitForLoadState('networkidle', {timeout: 30_000}).catch(() => {});
                await context.close();

                child_process.execSync(`zstd --rm ${har_out_path} -o ${zstd_out_path}`)
            } catch (error: any) {
                console.error(`Error ${idx} - ${url}`);
                fs.writeFileSync(error_out_path, error.toString());
            }
            await browser.close();
        }
    }
})();

