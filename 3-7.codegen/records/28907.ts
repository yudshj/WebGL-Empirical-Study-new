import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://xpertcube.com/');
  await page.locator('div').filter({ hasText: /^Web Applications$/ }).click();
  await page.locator('div').filter({ hasText: /^Digital Marketing$/ }).click();
  await page.locator('div').filter({ hasText: /^E-Learning$/ }).click();
  await page.locator('div').filter({ hasText: /^E-Learning$/ }).click();
  await page.locator('#slick-slide01 i').click();
  await page.locator('#slick-slide02 i').click();
});