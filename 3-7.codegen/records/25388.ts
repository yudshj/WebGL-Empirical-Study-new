import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.paulbatesarchitects.com/');
  await page.getByRole('link', { name: 'enter site' }).click();
  await page.getByRole('link', { name: 'Studio' }).click();
  await page.locator('#header').getByRole('link').nth(2).click();
});