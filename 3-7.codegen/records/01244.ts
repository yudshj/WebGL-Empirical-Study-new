import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.autohome.com.cn/beijing/');
  await page.locator('#slideWrap').getByRole('link', { name: '' }).click();
  await page.locator('#floornav-7').getByRole('link', { name: '' }).click();
});