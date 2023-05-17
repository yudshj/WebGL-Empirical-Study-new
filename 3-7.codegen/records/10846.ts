import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://jeen-yuhs.com/');
  await page.getByRole('button', { name: 'ENTER SITE' }).click();
});