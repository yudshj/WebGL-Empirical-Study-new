import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://m.skp-beijing.com/lb2021ss/index.1.html');
  await page.locator('#renderCanvas').click();
});