import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://qa.soccerbet.rs/');
  await page.goto('http://qa.soccerbet.rs/#kladjenje');
});