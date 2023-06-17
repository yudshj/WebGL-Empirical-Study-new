import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://play.realmnft.io/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 642,
      y: 462
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 635,
      y: 448
    }
  });
});