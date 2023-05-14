import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://smashtanks.io/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 633,
      y: 632
    }
  });
});