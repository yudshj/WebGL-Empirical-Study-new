import { chromium } from 'playwright';
import * as fs from 'fs';
import { evaluate_script_in_all_frames, wait_for_function_in_all_frames, get_data_in_all_frames } from './utils/utils';
import { contextOptions, indexUrls, getLaunchOptions } from './utils/config';
import { manual } from './utils/manual';

const NAME = 'spector-full';

const total = indexUrls.length;

const PART = parseInt(process.argv[2]);
const TOTAL_PART = parseInt(process.argv[3]);
const PART_SIZE = Math.ceil(total / TOTAL_PART);
const START = PART * PART_SIZE;
const END = Math.min((PART + 1) * PART_SIZE, total);

fs.mkdirSync(`output/${NAME}/`, { recursive: true });

(async () => {
    for (let i = PART; i < total; i += TOTAL_PART) {
        const [idx, url] = indexUrls[i];
        console.info(`${START.toString().padStart(5, '0')}/${idx}/${END}  -  ${url}`);
        const json_out_path = `output/${NAME}/${idx}.json`;
        const error_out_path = `output/${NAME}/${idx}.error.txt`;
        const manual_interaction = idx in manual;
        let manual_interaction_failed = false;

        if (fs.existsSync(json_out_path)) {
            console.info(`Skip ${idx}`);
            continue;
        }
        // if (!manual_interaction) { continue; }
        
        const browser = await chromium.launch(getLaunchOptions(NAME));
    
        try {
            const browserContext = await browser.newContext(contextOptions);
            // if (fs.existsSync(har_path)) {
            //     browserContext.routeFromHAR(har_path, { notFound: "fallback" });
            // }
            await browserContext.addInitScript({ path: 'js/spector.bundle.js' });
            await browserContext.addInitScript({ path: 'js/hydpako.min.js' });
            await browserContext.addInitScript({ path: 'js/inject-spector.js' });

            const page = await browserContext.newPage();
            const date = Date.now();

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
            await evaluate_script_in_all_frames(page, 'hydSpectorStart()', 10_000);
            // await page.waitForTimeout(15_000);
            await wait_for_function_in_all_frames(page, 'window._hydCaptured.length === window._hydSpectors.length', 30_000);
            const spector = await get_data_in_all_frames(page, 'hydSpectorStop()', 30_000);
            const data = {
                url,
                idx,
                date,
                netIdleTimeout,
                manual_interaction,
                manual_interaction_failed,
                spector,
            };
            // await page.waitForTimeout(3600_000);

            fs.writeFileSync(json_out_path, JSON.stringify(data));

            browserContext.close();
        }
        catch (error: any) {
            console.error(error);
            if (error instanceof Error) {
                fs.writeFileSync(error_out_path, [error.name, error.message, error.stack].join('\n++++++++++\n'));
            }
        }
    
        browser.close();
    }
})();