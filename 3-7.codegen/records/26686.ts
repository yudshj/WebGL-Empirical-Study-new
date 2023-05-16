import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.seluz.com/');
  await page.locator('div').filter({ hasText: 'Cookie PolicyWe use cookies to ensure that we give you the best experience on ou' }).getByRole('link', { name: 'Continue' }).click();
});