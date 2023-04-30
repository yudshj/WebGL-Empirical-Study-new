import { chromium } from 'playwright';
import * as fs from 'fs';
import { evaluate_script_in_all_frames, wait_for_function_in_all_frames, get_data_in_all_frames } from './utils/utils';
import { indexUrls } from './utils/config';

const NAME = 'cap';
fs.mkdirSync(`output/${NAME}/`, { recursive: true });

(async () => {
    const browser = await chromium.launch({
        headless: false,
        args: [
            `--enable-unsafe-webgpu`,
            `--no-sandbox`,
        ]
    });
    const browserContext = await browser.newContext({ ignoreHTTPSErrors: true });
    
    // browserContext.addInitScript({ path: 'spector-v0.9.27/dist/spector.bundle.js' });
    browserContext.addInitScript({ path: 'js/spector.bundle.js' });
    browserContext.addInitScript({ path: 'js/hydpako.min.js' });
    browserContext.addInitScript({ path: 'js/inject-spector.js' });

    try {
        const page = await browserContext.newPage();
        await page.goto('https://webglsamples.org/aquarium/aquarium.html', { timeout: 30_000, waitUntil: 'networkidle' });
        await page.waitForTimeout(1_000);
        await evaluate_script_in_all_frames(page, 'hydSpectorStart()', 10_000);
        await page.waitForTimeout(10_000);
        await wait_for_function_in_all_frames(page, 'window._hydCaptured.length === window._hydSpectors.length', 10_000);
        const cap = await get_data_in_all_frames(page, 'window._hydCaptured', 30_000);
        fs.writeFileSync('output/spector/capture.json', JSON.stringify(cap, null, 2));

        // await page.waitForTimeout(3600_000);
    }
    catch (e) {
        console.error(e);
    }

    browserContext.close();
    browser.close();
})();