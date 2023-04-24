const {chromium} = require('playwright');
const fs = require('fs');
const zlib = require('zlib');


const idx_url: Array<Array<String>> = JSON.parse(fs.readFileSync('../../final-output/0422-idx_url.json', 'utf8'));
const total = idx_url.length;

const PART = parseInt(process.argv[2]);
const TOTAL_PART = parseInt(process.argv[3]);
const PART_SIZE = Math.ceil(total / TOTAL_PART);
const START = PART * PART_SIZE;
const END = Math.min((PART + 1) * PART_SIZE, total);

console.log(START, "to", END)

fs.mkdirSync('output/cap/', {recursive: true});

(async () => {
    for (const element of idx_url.slice(START, END)) {
        const idx = element[0];
        const url = element[1];
        console.info(`${START.toString().padStart(5, '0')}/${idx}/${END}`);
        const gzip_out_path = `output/cap/${idx}.json.gz`;
        const error_out_path = `output/cap/${idx}.error.txt`;
        if (fs.existsSync(gzip_out_path) || fs.existsSync(error_out_path)) {
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
                const context = await browser.newContext({ignoreHTTPSErrors: true});
                await context.addInitScript({path: 'webgl-capture.js'});

                const page = await context.newPage();
                const date = Date.now();
                const start_time_hp = performance.now();
                await page.goto(url, {waitUntil: 'networkidle', timeout: 30_000}).catch(() => {
                });

                const net_idle_time_hp = performance.now();
                const net_idle_counters = [];
                for (const frame of page.frames()) {
                    net_idle_counters.push({
                        name: frame.name(),
                        url: frame.url(),
                        data: await frame.evaluate("window.hydGetCounters();").catch(() => null),
                    });
                }

                await page.waitForTimeout(10_000);
                for (const frame of page.frames()) {
                    await frame.evaluate("HydWebGLCapture.stopAll();").catch(() => {
                    });
                    await frame.waitForFunction("HydWebGLCapture.allStopped();").catch(() => {
                    });
                }

                const gl_cap_time_hp = performance.now();
                const gl_cap_counters = [];
                for (const frame of page.frames()) {
                    gl_cap_counters.push({
                        name: frame.name(),
                        url: frame.url(),
                        data: await frame.evaluate("window.hydGetCounters();").catch(() => null),
                    });
                }

                const gl_captures = [];
                for (const frame of page.frames()) {
                    gl_captures.push({
                        name: frame.name(),
                        url: frame.url(),
                        data: await frame.evaluate("HydWebGLCapture.generateAll();").catch(() => null),
                    });
                }

                const data = {
                    url,
                    date,
                    events_time_hp: {
                        start_time_hp,
                        net_idle_time_hp,
                        gl_cap_time_hp,
                    },
                    frame: {
                        net_idle_counters,
                        gl_cap_counters,
                        gl_captures,
                    }
                }
                const compressedData = zlib.gzipSync(JSON.stringify(data))
                fs.writeFileSync(gzip_out_path, compressedData);
                await context.close();
            } catch (error: any) {
                console.error(`Error ${idx} - ${url}`);
                if (error instanceof Error) {
                    fs.writeFileSync(error_out_path, [error.name, error.message, error.stack].join('\n++++++++++\n'));
                }
            }
            await browser.close();
        }
    }
})();

