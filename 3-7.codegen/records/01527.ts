import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://online.beatthebomb.com/');
  await page.goto('http://online.beatthebomb.com/mission-01/');
});