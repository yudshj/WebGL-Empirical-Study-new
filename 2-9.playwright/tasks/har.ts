import { chromium } from 'playwright';
import * as fs from 'fs';
import { launchOptions, indexUrls } from './utils/config';

const NAME = 'har';

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
        const zip_out_path = `output/${NAME}/${idx}.har.zip`;
        const error_out_path = `output/${NAME}/${idx}.error.txt`;
        if (fs.existsSync(zip_out_path) || fs.existsSync(error_out_path)) {
            console.info(`Skip ${idx} - ${url}`);
        } else {
            const browser = await chromium.launch(launchOptions[NAME]);
            try {
                const context = await browser.newContext( { ignoreHTTPSErrors: true, recordHar: { content: 'attach', path: zip_out_path, mode: 'full' } } );
                const page = await context.newPage();
                await page.goto(url, {waitUntil: 'networkidle', timeout: 60_000}).catch(() => {});
                await page.waitForTimeout(15_000);
                await page.waitForLoadState('networkidle', {timeout: 30_000}).catch(() => {});
                await page.waitForLoadState('networkidle', {timeout: 30_000}).catch(() => {});
                await context.close();
            } catch (error: any) {
                console.error(`Error ${idx} - ${url}`);
                fs.writeFileSync(error_out_path, error.toString());
            }
            await browser.close();
        }
    }
})();

