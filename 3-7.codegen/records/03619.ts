import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.sbs.com.au/kgari/');
  await page.locator('.landing-4 > img:nth-child(2)').click();
});