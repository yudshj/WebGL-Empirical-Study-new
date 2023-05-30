import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://tatesjourney.lol/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 623,
      y: 520
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 654,
      y: 616
    }
  });
});