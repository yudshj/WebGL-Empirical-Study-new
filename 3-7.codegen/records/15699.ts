import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://sevenyearsof.wondr.io/');
  await page.locator('#sound_on').click();
  await page.locator('#video').click();
  await page.goto('https://sevenyearsof.wondr.io/');
  await page.locator('#sound_off').click();
  await page.locator('#video').click();
  await page.locator('#introvideo').click();
});