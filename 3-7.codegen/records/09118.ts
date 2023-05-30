import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://futur-k.com/');
  await page.goto('https://futur-k.com/futur-k6-am-maxi/');
  await page.goto('https://futur-k.com/');
  await page.getByRole('link', { name: 'Scopri il Super Comfort' }).click();
});