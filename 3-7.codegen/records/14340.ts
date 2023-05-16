import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://placzabaw.teddyeddie.pl/v');
  await page.goto('https://placzabaw.teddyeddie.pl/v?v=0.72');
});