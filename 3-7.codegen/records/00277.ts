import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://beautiful.theavener.com/');
  await page.getByRole('paragraph').filter({ hasText: 'Out now' }).click();
});