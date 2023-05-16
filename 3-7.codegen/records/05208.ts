import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/blob-beats/ZgF_e3-CO-iRPw');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});