import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://console.geoiq.io/');
  await page.getByRole('button', { name: 'USA' }).click();
});