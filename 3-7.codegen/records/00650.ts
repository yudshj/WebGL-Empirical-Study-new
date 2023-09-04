import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://ede.mx/geografiaSE1.html');
  await page.frameLocator('iframe').getByRole('link', { name: '' }).click();
  await page.frameLocator('iframe').getByRole('link', { name: '' }).click();
  await page.frameLocator('iframe').getByRole('link', { name: '' }).click();
});