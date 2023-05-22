import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.gucafest.rs/');
  await page.getByRole('button', { name: 'Next slide' }).click();
  await page.getByRole('button', { name: 'Next slide' }).click();
  await page.getByRole('button', { name: 'Next slide' }).click();
  await page.getByRole('button', { name: 'Next slide' }).click();
});