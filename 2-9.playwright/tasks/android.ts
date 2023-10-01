import { chromium } from 'playwright';
import * as fs from 'fs';
import { contextOptions, indexUrls, getLaunchOptions, myStartParameters } from './utils/config';
import { manual } from './utils/manual';
import { checkGpu } from './utils/check';
import { traceHyd } from './utils/tracing';

const NAME = 'android';

const total = indexUrls.length;

const PART = parseInt(process.argv[2]);
const TOTAL_PART = parseInt(process.argv[3]);

fs.mkdirSync(`output/${NAME}/`, { recursive: true });

(async () => {
    const browser = await chromium.connectOverCDP('http://localhost:19222');
    const context = browser.contexts()[0];
    await context.setExtraHTTPHeaders({'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116 Safari/537.36'});
    await context.setExtraHTTPHeaders({'Accept-Language': 'en-US,en;q=0.9'});
    await context.grantPermissions(['camera', 'microphone']);

    for (let i = PART; i < total; i += TOTAL_PART) {
        const [idx, url] = indexUrls[i];
        // log date in hh:mm:ss
        console.info(new Date().toLocaleString(), `${PART}/${TOTAL_PART}  ${idx}`);
        const proto_gz_out_path = `output/${NAME}/${idx}.proto.gz`;
        const error_out_path = `output/${NAME}/${idx}.error.txt`;
        const manual_interaction = idx in manual;
        let manual_interaction_failed = false;

        if (fs.existsSync(proto_gz_out_path) || fs.existsSync(error_out_path)) {
            console.info(`Skip ${idx}`);
            continue;
        }
        // if (!manual_interaction) { continue; }

    
        try {
            for (const page of context.pages()) {
                await page.close();
            }
            const page = await context.newPage();
            page.bringToFront();

            let netIdleTimeout = -1;
            await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30_000 }).catch(() => null);
            await page.waitForLoadState('networkidle', { timeout: 30_000 }).catch(() => null);
            console.log("network idle 1");
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

            console.log("network idle 2");
            console.log("wait for 3 seconds");
                
            await page.waitForTimeout(3_000);
            await page.screenshot({ path: `screens/android/${idx}.png` }).catch(() => null);
            const cdp = await browser.newBrowserCDPSession();

            await traceHyd(cdp, 15_000).then((data) => {
                fs.writeFileSync(proto_gz_out_path, data);
            });

            await page.close();
        }
        catch (error: any) {
            console.error(error);
            if (error instanceof Error) {
                fs.writeFileSync(error_out_path, [error.name, error.message, error.stack].join('\n++++++++++\n'));
            }
        }
    }
})();