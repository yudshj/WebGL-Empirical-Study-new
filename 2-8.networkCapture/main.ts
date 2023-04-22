const { firefox } = require('playwright');

(async () => {
    const browser = await firefox.launch();
    const context = await browser.newContext( { recordHar: { content: 'embed', path: 'test.har' } } );
    const page = await context.newPage();
    await page.goto('https://playwright.dev');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    await context.close();
    await browser.close();
})();

