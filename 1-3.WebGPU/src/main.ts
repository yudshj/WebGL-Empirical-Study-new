import fs from 'fs';
import { chromium } from 'playwright';

import { contextOptions, indexUrls, getLaunchOptions } from './utils/config';
import { get_data_in_all_frames } from './utils/utils';

const NAME = 'canvas-type';

const total = indexUrls.length;

const PART = parseInt(process.argv[3]);
const TOTAL_PART = parseInt(process.argv[4]);
const PART_SIZE = Math.ceil(total / TOTAL_PART);
const START = PART * PART_SIZE;
const END = Math.min((PART + 1) * PART_SIZE, total);

fs.mkdirSync(`output/${NAME}/`, { recursive: true });
fs.mkdirSync(`output/screenshot/`, { recursive: true });
fs.mkdirSync(`output/html/`, { recursive: true });

async function main () {
    for (let i = START; i < END; i ++) {
        // PART; i < total; i += TOTAL_PART) {
        const [idx, url] = indexUrls[i];
        console.info(`${START.toString().padStart(5, '0')}/${idx}/${END}  -  ${url}`);
        const json_out_path = `output/${NAME}/${idx}.json`;
        const error_out_path = `output/${NAME}/${idx}.error.txt`;

        if (fs.existsSync(json_out_path)) {
            console.info(`Skip ${idx}`);
            continue;
        }
        
        const browser = await chromium.launch(getLaunchOptions(NAME));
    
        try {
            const browserContext = await browser.newContext(contextOptions);
            await browserContext.addInitScript({ path: 'js/getCanvasType.js' });

            const page = await browserContext.newPage();
            const date = Date.now();

            let netIdleTimeout = -1;
            await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30_000 }).catch(() => null);
            await page.waitForLoadState('networkidle', { timeout: 30_000 }).catch(() => null);
            // for (let i = 0; i < 4; i++) {
            //     await page.mouse.wheel(0, 512).catch(() => null);
            // }
            await page.waitForTimeout(10_000);
            // for (let i = 0; i < 4; i++) {
            //     await page.mouse.wheel(0, -512).catch(() => null);
            // }
            await page.waitForLoadState('networkidle', { timeout: 30_000 })
                .then(() => { netIdleTimeout = 0; })
                .catch(() => { netIdleTimeout = 1; })
                .catch(() => null);

            const canvas = await get_data_in_all_frames(page, 'window.koo7Gae7eire3Lit_getCounter()', 30_000);
            const data = {
                url,
                idx,
                date,
                netIdleTimeout,
                canvas,
            };

            const html_out_path = `output/html/${idx}.html`;
            fs.writeFileSync(html_out_path, await page.content());
            const screenshot_out_path = `output/screenshot/${idx}.png`;
            await page.screenshot({ path: screenshot_out_path });
            fs.writeFileSync(json_out_path, JSON.stringify(data));
            await browserContext.close();
        }
        catch (error) {
            console.error(error);
            if (error instanceof Error) {
                fs.writeFileSync(error_out_path, [error.name, error.message, error.stack].join('\n++++++++++\n'));
            }
        }
    
        await browser.close();
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
}

main();