import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://hammercrest.github.io/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 641,
      y: 483
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 66,
      y: 67
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 991,
      y: 398
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 188,
      y: 462
    }
  });
});