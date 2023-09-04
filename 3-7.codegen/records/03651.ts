import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.setedias.com.br/');
  await page.locator('#banner0').getByRole('link').nth(2).click();
  await page.locator('#banner0').getByRole('link').nth(2).click();
});