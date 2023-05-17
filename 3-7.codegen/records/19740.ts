import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.boranka.hr/en');
  await page.getByRole('button', { name: 'I Agree' }).click();
  await page.locator('.boranka-landing__visit-forest > svg > path').click();
  await page.getByRole('button', { name: 'ok' }).click();
  await page.getByRole('button', { name: 'ok' }).click();
  await page.getByRole('button', { name: 'ok' }).click();
});