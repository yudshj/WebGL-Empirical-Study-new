import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.kodeclubs.com/');
  await page.getByRole('img', { name: 'Preloader' }).click();
  await page.getByRole('img', { name: 'Preloader' }).click();
});