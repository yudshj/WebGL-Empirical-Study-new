import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://thejaneantwerp.com/');
  await page.getByRole('checkbox').check();
  await page.locator('#menu').getByRole('link', { name: 'The Jane Antwerp' }).click();
});