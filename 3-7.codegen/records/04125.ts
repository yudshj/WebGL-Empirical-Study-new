import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://17squares.com/closets/?source=%5BgetSource%5D');
  await page.locator('#unity-canvas').click({
    position: {
      x: 646,
      y: 508
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 654,
      y: 369
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 398,
      y: 371
    }
  });
});