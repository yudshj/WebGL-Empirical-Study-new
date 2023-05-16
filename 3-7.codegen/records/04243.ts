import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://3d.xn--63-vlch8au.xn--p1ai/');
  await page.locator('div:nth-child(2) > img').first().click();
});