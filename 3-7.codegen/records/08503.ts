import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://exchange-sueddeutsche.das-onlinespiel.de/');
  await page.goto('https://exchange-sueddeutsche.das-onlinespiel.de/?re=1');
});