import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://mcname.info/en/');
  await page.getByRole('link', { name: 'LLALLEN LLALLEN #1 ★1' }).click();
  await page.frameLocator('iframe[name="aswift_3"]').frameLocator('iframe[name="ad_iframe"]').getByRole('button', { name: 'Close ad' }).click();
});