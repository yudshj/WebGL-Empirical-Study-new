import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://yorescape.com/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 680,
      y: 686
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 642,
      y: 686
    }
  });
  await page.locator('#unity-canvas').click({
    clickCount: 3,
    position: {
      x: 642,
      y: 686
    }
  });
  await page.locator('html').click({
    clickCount: 4
  });
});