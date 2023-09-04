import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://medical.taiwantrade.com/home.html');
  await page.getByText('no', { exact: true }).click();
});