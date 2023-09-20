import { chromium } from 'playwright';
import * as fs from 'fs';
import * as zlib from "zlib";
import { get_data_in_all_frames, evaluate_script_in_all_frames } from './utils/utils';
import { contextOptions, getLaunchOptions, indexUrls } from './utils/config';
import { manual } from './utils/manual';
import { checkGpu } from './utils/check';

const NAME = 'raf';

const total = indexUrls.length;

const PART = parseInt(process.argv[2]);
const TOTAL_PART = parseInt(process.argv[3]);
const PART_SIZE = Math.ceil(total / TOTAL_PART);
const START = PART * PART_SIZE;
const END = Math.min((PART + 1) * PART_SIZE, total);

console.log(START, "to", END)

fs.mkdirSync(`output/${NAME}/`, { recursive: true });

(async () => {
    const browser = await chromium.launch(getLaunchOptions(NAME));
    checkGpu(browser).catch(() => {throw new Error("GPU acceleration is not enabled")});
    console.log("GPU acceleration is enabled");
    await browser.close();
    
    // for (const [idx, url] of indexUrls.slice(START, END)) {
    for (let i = PART; i < total; i += TOTAL_PART) {
        const [idx, url] = indexUrls[i];
        console.info(`${PART.toString()}  ${START.toString().padStart(5, '0')}/${idx}/${END}`);
        const gzip_out_path = `output/${NAME}/${idx}.json.gz`;
        const error_out_path = `output/${NAME}/${idx}.error.txt`;
        const manual_interaction = idx in manual;
        let manual_interaction_failed = false;

        if (fs.existsSync(gzip_out_path) || fs.existsSync(error_out_path)) {
            console.info(`Skip ${idx} - ${url}`);
            continue;
        }
        // if (!manual_interaction) { continue; }
        
        const browser = await chromium.launch(getLaunchOptions(NAME));
        try {
            const time_hp_base = performance.now();
            const context = await browser.newContext(contextOptions);
            await context.addInitScript({ path: 'js/inject-gl.js' });

            const page = await context.newPage();
            const date = Date.now();
            const start_time_hp = performance.now() - time_hp_base;

            let netIdleTimeout = -1;
            await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30_000 }).catch(() => null);
            await page.waitForLoadState('networkidle', { timeout: 30_000 }).catch(() => null);

            for (let i = 0; i < 4; i++) {
                await page.mouse.wheel(0, 512).catch(() => null);
            }

            await page.waitForTimeout(1000);

            for (let i = 0; i < 4; i++) {
                await page.mouse.wheel(0, -512).catch(() => null);
            }

            if (manual_interaction) {
                await manual[idx](page).catch(() => null);
            }

            await page.waitForLoadState('networkidle', { timeout: 60_000 })
                .then(() => { netIdleTimeout = 0; })
                .catch(() => { netIdleTimeout = 1; })
                .catch(() => null);

            await page.waitForTimeout(10_000);

            const a_time_hp = performance.now() - time_hp_base;
            const a_rafs = await get_data_in_all_frames(page, "HydGetGLInfo();", 30_000);

            await page.waitForTimeout(10_000);

            const b_time_hp = performance.now() - time_hp_base;
            const b_rafs = await get_data_in_all_frames(page, "HydGetGLInfo();", 30_000);

            const data = {
                url,
                date,
                netIdleTimeout,
                manual_interaction,
                manual_interaction_failed,
                events_time_hp: {
                    start_time_hp,
                    a_time_hp,
                    b_time_hp,
                },
                frame: {
                    a_rafs,
                    b_rafs,
                }
            }
            // await page.waitForTimeout(3600 * 1000);
            const compressedData = zlib.gzipSync(JSON.stringify(data))
            fs.writeFileSync(gzip_out_path, compressedData);
            await context.close();
        } catch (error: any) {
            console.error(`Error ${idx} - ${url}`);
            fs.writeFileSync(error_out_path, error.toString());
        }
        await browser.close();
    }
})();

