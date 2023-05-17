import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://rolling-sky--jser.repl.co/');
  await page.locator('#play-arrow').click();
});