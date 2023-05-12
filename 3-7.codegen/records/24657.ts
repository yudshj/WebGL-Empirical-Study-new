import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.mufitbicak.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Shopier hızlı alışveriş' }).click();
  const page1 = await page1Promise;
  await page.getByRole('button', { name: 'Kapat' }).click();
});