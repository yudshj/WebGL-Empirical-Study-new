import playwright from 'playwright';
(async () => {
  for (const browserType of [playwright.chromium]) {
    const browser = await browserType.launch({
      args: [
        '--use-angle=angle',
        '--use-gl=egl',
        '--enable-gpu',
        '--no-sandbox',
        '--ignore-gpu-blocklist'
    ],
     } );
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('chrome://gpu');
    await page.screenshot({ path: `example-${browserType.name()}.png` });
    await browser.close();
  }
})();