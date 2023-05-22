import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.fallen.io/ww2/');
  await page.locator('.welcome-interactive-cirle').click();
  await page.locator('#the-canvas').click({
    position: {
      x: 658,
      y: 515
    }
  });
  await page.locator('#settings-closed').click();
  await page.goto('http://www.fallen.io/ww2/');
  await page.locator('.welcome-interactive-cirle').click();
  await page.locator('#the-canvas').click({
    position: {
      x: 639,
      y: 500
    }
  });
});