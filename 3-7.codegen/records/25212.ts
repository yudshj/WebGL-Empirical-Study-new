import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.opensceneryx.com/');
  await page.locator('div:nth-child(9) > a').click();
  await page.goto('https://www.opensceneryx.com/');
});