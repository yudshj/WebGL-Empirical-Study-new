import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://thischairdoesnotexist.com/?s=5cd5ae10');
  await page.locator('#weirdness-text').click();
  await page.locator('#weirdness-text').fill('10');
  await page.locator('#weirdness-text').press('Enter');
  await page.locator('#resolution-text').click();
  await page.locator('#resolution-text').fill('50');
  await page.locator('#resolution-text').press('Enter');
  await page.locator('#level-text').click();
  await page.locator('#level-text').fill('0.005');
  await page.locator('#level-text').press('Enter');
});