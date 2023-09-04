import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://kd.com.pl/');
  await page.getByRole('button', { name: 'TAK' }).click();
  await page.frameLocator('iframe').getByRole('link', { name: 'Next page' }).click();
  await page.frameLocator('iframe').getByRole('link', { name: 'Next page' }).click();
  await page.frameLocator('iframe').getByRole('link', { name: 'Previous page' }).click();
});