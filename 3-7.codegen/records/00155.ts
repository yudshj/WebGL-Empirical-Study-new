import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://anonymouscode.jp/');
  await page.locator('#over__close').click();
  await page.locator('#pickupswiper_next').click();
  await page.locator('#newsswiper_next').click();
});