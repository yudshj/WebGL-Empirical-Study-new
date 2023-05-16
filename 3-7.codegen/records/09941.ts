import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://helixmedia360.com/Tours/River.Oaks.District.html');
  await page.locator('div').filter({ hasText: /^SKY VIEW$/ }).first().click();
  await page.locator('div').filter({ hasText: /^Group 3868$/ }).first().click();
  await page.locator('div').filter({ hasText: /^Night Aerial 360°$/ }).first().click();
});