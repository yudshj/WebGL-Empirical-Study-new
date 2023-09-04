import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://agoravirtual.com.br/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 465,
      y: 346
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 478,
      y: 629
    }
  });
});