import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://dekho.in/');
  await page.goto('https://www.voxels.com/play?coords=E@1890E,1149N');
  await page.locator('#renderCanvas').click({
    position: {
      x: 387,
      y: 390
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 387,
      y: 390
    }
  });
});