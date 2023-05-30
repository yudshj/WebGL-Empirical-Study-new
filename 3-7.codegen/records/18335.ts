import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://webgl-rolling-sky--iamcaleblol.repl.co/');
  await page.locator('#play-arrow').click();
  await page.locator('#retry-icon').click();
});