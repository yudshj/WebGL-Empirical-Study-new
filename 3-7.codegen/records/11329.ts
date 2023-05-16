import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://kopke1638.com/');
  await page.locator('circle').click();
  await page.locator('circle').click();
});