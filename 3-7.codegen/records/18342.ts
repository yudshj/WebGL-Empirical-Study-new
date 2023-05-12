import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://webgltest-17af1.firebaseapp.com/');
  await page.locator('#gameCanvas').click({
    position: {
      x: 717,
      y: 413
    }
  });
  await page.locator('#gameCanvas').click({
    position: {
      x: 634,
      y: 548
    }
  });
});