import { chromium } from 'playwright';
import * as fs from 'fs';
import { evaluate_script_in_all_frames, wait_for_function_in_all_frames, get_data_in_all_frames } from './utils/utils';
import { indexUrls, launchOptions, proxyPool } from './utils/config';

const NAME = 'spector-full';

const total = indexUrls.length;

const PART = parseInt(process.argv[2]);
const TOTAL_PART = parseInt(process.argv[3]);
const PART_SIZE = Math.ceil(total / TOTAL_PART);
const START = PART * PART_SIZE;
const END = Math.min((PART + 1) * PART_SIZE, total);

fs.mkdirSync(`output/${NAME}/`, { recursive: true });

(async () => {
    for (let i = START; i < END; i++) {
        const [idx, url] = indexUrls[i];
        console.info(`${START.toString().padStart(5, '0')}/${idx}/${END}  -  ${url}`);
        // const har_path = `output/har/${idx}.har.zip`;
        const json_out_path = `output/${NAME}/${idx}.json`;
        const error_out_path = `output/${NAME}/${idx}.error.txt`;
        if (fs.existsSync(json_out_path)) {
            console.info(`Skip ${idx}`);
            continue;
        }
        
        // random select proxy
        let launchOption = launchOptions[NAME];
        launchOption.proxy = {
            server: proxyPool[Math.floor(Math.random() * proxyPool.length)],
            bypass: 'localhost,127.0.0.1'
        };
        console.log("PROXY:", launchOption.proxy)
        const browser = await chromium.launch(launchOption);
    
        try {
            const browserContext = await browser.newContext({ ignoreHTTPSErrors: true });
            // if (fs.existsSync(har_path)) {
            //     browserContext.routeFromHAR(har_path, { notFound: "fallback" });
            // }
            await browserContext.addInitScript({ path: 'js/spector.bundle.js' });
            await browserContext.addInitScript({ path: 'js/hydpako.min.js' });
            await browserContext.addInitScript({ path: 'js/inject-spector.js' });

            const page = await browserContext.newPage();
            const date = Date.now();
            await page.goto(url, { timeout: 30_000, waitUntil: 'networkidle' }).catch(() => {});
            await page.waitForTimeout(10_000);
            await evaluate_script_in_all_frames(page, 'hydSpectorStart()', 10_000);
            // await page.waitForTimeout(15_000);
            await wait_for_function_in_all_frames(page, 'window._hydCaptured.length === window._hydSpectors.length', 15_000);
            const spector = await get_data_in_all_frames(page, 'window._hydCaptured', 30_000);
            const data = {
                url,
                idx,
                date,
                spector,
            };
            fs.writeFileSync(json_out_path, JSON.stringify(data));

            // await page.waitForTimeout(3600_000);

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