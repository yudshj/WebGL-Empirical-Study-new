import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://wiki.polyfra.me/');
  await page.getByRole('link', { name: 'LAUNCH' }).click();
});