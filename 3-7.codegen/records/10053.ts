import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://hny2018.pixelfordinner.com/');
  await page.locator('#canvas').click({
    position: {
      x: 586,
      y: 398
    }
  });
});