import { chromium } from 'playwright';

(async () => {
    const pathToExtension = require('path').join(__dirname, 'spector-v0.9.27/extensions');
    const userDataDir = '/tmp/test-user-data-dir';
    const browserContext = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
        args: [
            `--disable-extensions-except=${pathToExtension}`,
            `--load-extension=${pathToExtension}`
        ]
    });
    const page = await browserContext.newPage();
    await page.goto('https://webglsamples.org/aquarium/aquarium.html', {timeout: 30_000, waitUntil: 'domcontentloaded'});
    await page.evaluate("SPECTOR.spyCanvases()");
    // https://github.com/BabylonJS/Spector.js/blob/c4cbabda3abba091d60a0dc87ca7f50d1e465828/src/backend/states/drawCalls/drawCallState.ts#L13
    
})();