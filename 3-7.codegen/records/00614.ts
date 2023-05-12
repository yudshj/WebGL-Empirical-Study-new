import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://www.dreamworkstv.com/she-ra/');
  await page.locator('#loader-canvas').click({
    position: {
      x: 640,
      y: 429
    }
  });
});