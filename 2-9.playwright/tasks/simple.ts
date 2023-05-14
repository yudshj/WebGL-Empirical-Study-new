import { chromium } from 'playwright';
import * as fs from 'fs';
import * as zlib from "zlib";
import { get_data_in_all_frames } from './utils/utils';
import { getLaunchOptions, indexUrls } from './utils/config';
import { manual } from './utils/manual';

const NAME = 'simple';

const total = indexUrls.length;

const PART = parseInt(process.argv[2]);
const TOTAL_PART = parseInt(process.argv[3]);
const PART_SIZE = Math.ceil(total / TOTAL_PART);
const START = PART * PART_SIZE;
const END = Math.min((PART + 1) * PART_SIZE, total);

console.log(START, "to", END)

fs.mkdirSync(`output/${NAME}/`, { recursive: true });

(async () => {
    for (const [idx, url] of indexUrls.slice(START, END)) {
        console.info(`${START.toString().padStart(5, '0')}/${idx}/${END}`);
        const gzip_out_path = `output/${NAME}/${idx}.json.gz`;
        const error_out_path = `output/${NAME}/${idx}.error.txt`;
        const manual_interaction = idx in manual;

        if (fs.existsSync(gzip_out_path) || fs.existsSync(error_out_path)) {
            console.info(`Skip ${idx} - ${url}`);
        } else {
            const browser = await chromium.launch(getLaunchOptions(NAME));
            try {
                const context = await browser.newContext({ ignoreHTTPSErrors: true });
                await context.addInitScript({ path: 'js/webgl-memory.js' });
                await context.addInitScript({ path: 'js/inject-simple.js' });

                const page = await context.newPage();
                const date = Date.now();
                const start_time_hp = performance.now();

                let netIdleTimeout = -1;
                await page.goto(url, { waitUntil: 'networkidle', timeout: 30_000 })
                    .then(() => {netIdleTimeout = 0;})
                    .catch(() => {netIdleTimeout = 1;})
                    .catch(() => null);
                if (manual_interaction) {
                    await manual[idx](page);
                }

                const net_idle_time_hp = performance.now();
                const net_idle_counters: any[] = await get_data_in_all_frames(page, "window.hydGetCounters();", 10_000);

                await page.waitForTimeout(15_000);

                const gl_simple_time_hp = performance.now();
                const gl_simple_counters: any[] = await get_data_in_all_frames(page, "window.hydGetCounters();", 10_000);

                const gl_simples = await get_data_in_all_frames(page, "HydGetGLInfo();", 30_000);

                const data = {
                    url,
                    date,
                    netIdleTimeout,
                    manual_interaction,
                    events_time_hp: {
                        start_time_hp,
                        net_idle_time_hp,
                        gl_simple_time_hp,
                    },
                    frame: {
                        net_idle_counters,
                        gl_simple_counters,
                        gl_simples,
                    }
                }
                const compressedData = zlib.gzipSync(JSON.stringify(data))
                fs.writeFileSync(gzip_out_path, compressedData);
                await context.close();
            } catch (error: any) {
                console.error(`Error ${idx} - ${url}`);
                fs.writeFileSync(error_out_path, error.toString());
            }
            await browser.close();
        }
    }
})();
