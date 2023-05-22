import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://thischairdoesnotexist.com/?s=543e29ba');
  await page.locator('#resolution-slider').click();
  await page.locator('#weirdness-slider').click();
  await page.locator('#level-slider').click();
});