import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.vatika.ae/Home/index.html');
  await page.locator('div:nth-child(3) > div:nth-child(13) > div').first().click();
  await page.locator('.ggskin > div').first().click();
});