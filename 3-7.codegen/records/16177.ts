import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://sortthecourt.clambam10.repl.co/');
  await page.frameLocator('iframe').locator('#canvas').click({
    position: {
      x: 476,
      y: 228
    }
  });
  await page.frameLocator('iframe').locator('#canvas').click({
    position: {
      x: 478,
      y: 204
    }
  });
});