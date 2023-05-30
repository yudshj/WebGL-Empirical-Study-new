import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://raviandemma.sbs.com.au/');
  await page.locator('#landing-button').click();
  await page.locator('g:nth-child(8) > g > path:nth-child(2)').click();
  await page.locator('g:nth-child(11) > g > path:nth-child(2)').click();
  await page.locator('g:nth-child(8) > g > path:nth-child(2)').click();
});