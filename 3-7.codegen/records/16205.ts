import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://southtelecom.vn/');
  await page.locator('#topup div').filter({ hasText: 'iDBS – Digital Banking Innovation Digital Banking System (iDBS) has been designe' }).nth(1).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('section').getByRole('link').nth(1).click();
  await page.getByRole('button', { name: 'Close' }).click();
});