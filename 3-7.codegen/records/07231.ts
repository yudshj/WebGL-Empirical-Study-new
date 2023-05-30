import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.creaticode.com/');
  await page.locator('canvas').nth(1).click({
    position: {
      x: 578,
      y: 542
    }
  });
  await page.keyboard.press('w', { delay: 10000 });
});