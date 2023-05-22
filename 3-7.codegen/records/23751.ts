import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.laventanacine.com/');
  await page.getByRole('navigation').locator('div').filter({ hasText: 'Toggle navigation' }).getByRole('link').click();
  await page.getByRole('link', { name: 'CHICAGO BOYS' }).click();
});