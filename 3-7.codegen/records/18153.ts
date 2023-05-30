import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://vr.tokyostarbank.co.jp/');
  await page.locator('div:nth-child(66) > div:nth-child(2)').click();
  await page.locator('div:nth-child(64) > div > div:nth-child(3)').click();
  await page.locator('.ggskin > div > div > div:nth-child(5)').first().click();
  await page.locator('div:nth-child(3) > div:nth-child(3) > div:nth-child(2)').first().click();
  await page.locator('div:nth-child(11) > div > div').first().click();
  await page.locator('div:nth-child(41) > div > div:nth-child(3)').click();
});