import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.chrometattooparis.com/');
  await page.getByRole('link', { name: 'enter' }).click();
  await page.getByRole('link', { name: 'discover' }).click();
});