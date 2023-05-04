import { chromium } from 'playwright';
import * as fs from 'fs';
// import * as zlib from "zlib";
import { get_data_in_all_frames, evaluate_script_in_all_frames, wait_for_function_in_all_frames } from './utils/utils';
import { indexUrls, getLaunchOptions } from './utils/config';

const NAME = 'cap';

const total = indexUrls.length;

const PART = parseInt(process.argv[2]);
const TOTAL_PART = parseInt(process.argv[3]);
const PART_SIZE = Math.ceil(total / TOTAL_PART);
const START = PART * PART_SIZE;
const END = Math.min((PART + 1) * PART_SIZE, total);

const HUNDRED_FRAMES = false;

console.info(START, "to", END);

fs.mkdirSync(`output/${NAME}/`, { recursive: true });

(async () => {
    for (const [idx, url] of indexUrls.slice(START, END)) {
        console.info(`${START.toString().padStart(5, '0')}/${idx}/${END}  -  ${url}`);
        const json_out_path = `output/${NAME}/${idx}.json`;
        const gzip_out_path = `output/${NAME}/${idx}.json.gz`;
        const error_out_path = `output/${NAME}/${idx}.error.txt`;
        if (fs.existsSync(json_out_path) || fs.existsSync(gzip_out_path) || fs.existsSync(error_out_path)) {
            console.info(`Skip ${idx} - ${url}`);
        } else {
            const browser = await chromium.launch(getLaunchOptions(NAME));
            try {
                console.info('  launch browser')
                const context = await browser.newContext({ ignoreHTTPSErrors: true });
                await context.addInitScript({ path: 'js/hydpako.min.js' });
                await context.addInitScript({ path: 'js/inject-tiny.js' });
                await context.addInitScript({ path: 'js/webgl-capture.js' });

                const page = await context.newPage();
                const date = Date.now();
                const start_time_hp = performance.now();

                console.info('  goto');
                let netIdleTimeout = -1;
                await page.goto(url, { waitUntil: 'networkidle', timeout: 30_000 })
                    .then(() => {netIdleTimeout = 0; evaluate_script_in_all_frames(page, "HydWebGLCapture.debugInfoAll('net_idle - OK');", 10_000);})
                    .catch(() => {netIdleTimeout = 1; evaluate_script_in_all_frames(page, "HydWebGLCapture.debugInfoAll('net_idle - ERROR (TIMEOUT?)');", 10_000);})
                    .catch(() => null);

                console.info('  net idle');
                const net_idle_time_hp = performance.now();
                const net_idle_counters = await get_data_in_all_frames(page, "window.hydGetCounters();", 10_000);

                if (HUNDRED_FRAMES) {
                    evaluate_script_in_all_frames(page, "hydRemainFrames = 300;", 10_000);
                } else {
                    await page.waitForTimeout(5_000);
                    await evaluate_script_in_all_frames(page, "HydWebGLCapture.debugInfoAll('gl_cap'); HydWebGLCapture.stopAll();", 10_000);
                }

                console.info('  capture');
                const gl_cap_time_hp = performance.now();
                const gl_cap_counters = await get_data_in_all_frames(page, "window.hydGetCounters();", 10_000);
                await wait_for_function_in_all_frames(page, "HydWebGLCapture.allStopped()", 10_000);

                // const gl_captures = await get_data_in_all_frames(page, "HydWebGLCapture.generateAll();", 30_000, (data: string[]) => data.map((d: string) => zlib.inflateSync(Buffer.from(d, 'base64')).toString()));
                const gl_captures = await get_data_in_all_frames(page, "HydWebGLCapture.generateAll();", 30_000);

                const data = {
                    url,
                    date,
                    netIdleTimeout,
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
                };
                console.log("  saving");
                // const compressedData = zlib.gzipSync(JSON.stringify(data));
                // fs.writeFileSync(gzip_out_path, compressedData);
                fs.writeFileSync(json_out_path, JSON.stringify(data));

                // await page.waitForEvent("close", {timeout: 3600_000})
                console.log("  closing");
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

