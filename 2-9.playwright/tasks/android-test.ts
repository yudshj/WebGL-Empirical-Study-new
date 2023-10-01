import { chromium } from 'playwright';
import { sleepHyd, traceHyd } from './utils/tracing';
import * as fs from 'fs';

(async () => {
    const browser = await chromium.connectOverCDP('http://localhost:19222');
    const context = browser.contexts()[0];
    await context.setExtraHTTPHeaders({'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116 Safari/537.36'});
    await context.setExtraHTTPHeaders({'Accept-Language': 'en-US,en;q=0.9'});
    await context.grantPermissions(['camera', 'microphone']);
    for (const page of context.pages()) {
        await page.close();
    }
    const page = await context.newPage();
    await page.bringToFront();
    await page.goto("https://webglsamples.org/aquarium/aquarium.html");
    // await page.waitForEvent('load').catch(() => null);
    await page.waitForLoadState('networkidle').catch(() => null);
    const cdp = await context.newCDPSession(page);
    sleepHyd(1000);
    await traceHyd(cdp, 1000).then((data) => {
        fs.writeFileSync('output/android-trace.proto.gz', data);
    });
    await page.close();
    return;
})();