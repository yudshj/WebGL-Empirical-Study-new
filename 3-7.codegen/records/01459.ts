import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://nftmnfts.caffeina.com/');
  await page.getByRole('button', { name: 'TELL ME' }).click();
});