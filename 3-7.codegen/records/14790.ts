import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://qintessexperience.qintess.com/');
  await page.locator('body').press('s');
  await page.locator('body').press('Enter');
});