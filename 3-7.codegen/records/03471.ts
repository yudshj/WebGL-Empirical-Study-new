import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.phuketvirtualtour.com/');
  await page.locator('div:nth-child(3) > div:nth-child(29) > div').first().click();
});