import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://d3nkfb7815bs43.cloudfront.net/');
  await page.locator('#error-no-model-desktop-close').click();
});