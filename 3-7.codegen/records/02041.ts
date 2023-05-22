import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://thor.iprefer.com.tw/iprefer/labs/christmas2015/MainApp/');
  await page.locator('.btnFrontStartBlock').click();
  await page.getByText('Taiwan offline').click();
  await page.getByText('North America offline').click();
});