import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.trivver.com/');
  await page.locator('div').filter({ hasText: 'tap to enterproducingcreatingplacingmeasuring' }).nth(1).click();
  await page.locator('#terms-popup-close').first().click();
  await page.locator('div').filter({ hasText: 'tap to enterproducingcreatingplacingmeasuring' }).nth(1).click();
  await page.locator('div').filter({ hasText: 'tap to enterproducingcreatingplacingmeasuring' }).nth(1).click();
  await page.locator('div').filter({ hasText: 'tap to enterproducingcreatingplacingmeasuring' }).nth(1).click();
});