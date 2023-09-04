import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://davesdogsva.com/');
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Prev' }).click();
});