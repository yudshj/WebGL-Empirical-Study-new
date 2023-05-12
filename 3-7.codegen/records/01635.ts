import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://play.realmnft.io/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 665,
      y: 482
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 660,
      y: 450
    }
  });
});