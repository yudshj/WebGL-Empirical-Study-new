import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.baqueratta.com/');
  await page.locator('#houseName div img').click();
  await page.locator('#sortVertical div').nth(1).click();
  await page.locator('#viewPhoto div').filter({ hasText: 'NIL house ©Yasunori Shimomura' }).locator('img').nth(3).click();
});