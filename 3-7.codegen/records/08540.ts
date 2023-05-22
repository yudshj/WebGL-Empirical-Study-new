import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://experience.spleendd.com/');
  await page.goto('https://experience.spleendd.com/#/');
  await page.locator('a').click();
  await page.locator('li:nth-child(2) > .lock').click();
  await page.locator('li:nth-child(3) > .lock').click();
  await page.locator('li:nth-child(4) > .lock').click();
  await page.locator('li:nth-child(5) > .lock').click();
  await page.locator('li:nth-child(6) > .lock').click();
});