import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://square.geex-arts.com/');
  await page.getByText('Let\'s Rock!').click();
  await page.getByText('Skip').click();
  await page.locator('app-preloader').getByText('Pull').click();
});