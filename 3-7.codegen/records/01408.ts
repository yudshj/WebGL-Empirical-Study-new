import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://muzikdefteri.eba.gov.tr/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 536,
      y: 124
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 767,
      y: 523
    }
  });
});