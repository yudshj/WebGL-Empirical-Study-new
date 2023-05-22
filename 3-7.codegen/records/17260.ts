import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://trackmatic.co.za/');
  await page.locator('.swiper-button-next').click();
  await page.locator('#canvas div').nth(1).click();
  await page.locator('#canvas div').first().click();
  await page.locator('.swiper-button-next').click();
  await page.locator('.swiper-button-next').click();
  await page.locator('.exp-move-button').click();
  await page.locator('i').nth(2).click();
  await page.locator('i').nth(2).click();
  await page.locator('.exp-move-button').click();
});