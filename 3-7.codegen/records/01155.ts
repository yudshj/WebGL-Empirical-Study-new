import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://kurokawawonderland.jp/');
  await page.getByText('LOADING ENTER').click();
});