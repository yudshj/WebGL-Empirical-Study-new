import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://toyotagazooracing.com/jp/gr/config/#/');
  await page.getByRole('link', { name: 'Allow all cookies' }).click();
  await page.locator('a').filter({ hasText: 'PRIUS PHV GR SPORT' }).click();
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.locator('a').filter({ hasText: 'ボディカラー' }).click();
  await page.locator('div:nth-child(4) > .ConfigureMenuOption').click();
});