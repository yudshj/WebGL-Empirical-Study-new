import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://login.in/');
  await page.goto('https://www.voxels.com/play?coords=E@1890E,1149N');
});