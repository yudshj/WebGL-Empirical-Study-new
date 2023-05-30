import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://epicskidmarks.com/');
  await page.goto('https://epicskidmarks.com/?page=1');
  await page.getByText('Red Herd', { exact: true }).click();
  await page.getByText('Declare New Battle!').click();
  await page.locator('span').filter({ hasText: /^Twistie$/ }).getByRole('img').click();
  await page.getByText('Declare!').click();
});