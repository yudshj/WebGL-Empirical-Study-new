import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://cavitak.com/');
  await page.locator('div').filter({ hasText: 'Click here to know What\'s Next?' }).nth(3).click();
  await page.locator('div').filter({ hasText: 'Click here to know What\'s Next?' }).nth(3).click();
  await page.getByRole('link', { name: 'Click here to know What\'s Next?' }).click();
});