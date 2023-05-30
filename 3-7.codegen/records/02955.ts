import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.house1938hotel.com/');
  await page.locator('div:nth-child(3) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2)').click();
  await page.getByText('AvluGiriş 100%0 551 158 48 97Kayseri / Türkiye© copyright 2021 Resepsiyon● Giriş').click();
  await page.locator('div:nth-child(3) > div:nth-child(2)').first().click();
  await page.locator('div:nth-child(2) > div:nth-child(3) > div:nth-child(2)').click();
});