import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://david.li/waves/');
  await page.locator('#overlay').click();
  await page.locator('#overlay').click();
  await page.locator('#overlay').click();
  await page.locator('#overlay').click();
});