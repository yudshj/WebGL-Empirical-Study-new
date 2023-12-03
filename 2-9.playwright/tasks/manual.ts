import { chromium, firefox, webkit } from 'playwright';
import * as fs from 'fs';
import { getLaunchOptions, indexUrls } from './utils/config';

const NAME = 'screenshot';

const total = indexUrls.length;

const PART = parseInt(process.argv[2]);
const TOTAL_PART = parseInt(process.argv[3]);
const PART_SIZE = Math.ceil(total / TOTAL_PART);
const START = PART * PART_SIZE;
const END = Math.min((PART + 1) * PART_SIZE, total);

fs.mkdirSync(`output/${NAME}/`, { recursive: true });

(async () => {
    for (const [idx, url] of indexUrls.slice(START, END)) {
        console.info(`${START.toString().padStart(5, '0')}/${idx}/${END}`);
        const browsers = [chromium, firefox, webkit];
        for (const browserType of browsers) {
            const browser = await browserType.launch(getLaunchOptions(NAME));
            const context = await browser.newContext( { ignoreHTTPSErrors: true } );
            const page = await context.newPage();
            await page.goto(url).catch(() => {});
            await page.waitForEvent('close', {timeout: 3600_000}).catch(() => {});
            await context.close();
            await browser.close();
        }
    }
})();
