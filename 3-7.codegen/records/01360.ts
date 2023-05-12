import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://mio.makibisi.net/');
  await page.locator('#UpperCanvas').click({
    position: {
      x: 386,
      y: 413
    }
  });
});