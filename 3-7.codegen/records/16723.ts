import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://taytocrisps.ie/games/tayto-run/');
  await page.getByRole('link', { name: 'Play', exact: true }).click();
});