import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.cremur.com/');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
});