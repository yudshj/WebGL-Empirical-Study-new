import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://fafswagvogue.com/');
  await page.getByText('Click and Hold To start Swipe up To start Skip').click({ button: "left", delay: 10_000 });
});