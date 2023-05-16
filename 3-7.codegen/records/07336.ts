import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://custom.gomezsimindustries.com/');
  await page.locator('#hyper').getByRole('img').click();
});