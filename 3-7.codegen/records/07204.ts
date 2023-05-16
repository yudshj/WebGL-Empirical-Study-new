import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://cowboy-force.oxbull.tech/');
  await page.goto('https://cowboy-force.oxbull.tech/home');
  await page.getByRole('link', { name: 'P L A Y N O W' }).click();
});