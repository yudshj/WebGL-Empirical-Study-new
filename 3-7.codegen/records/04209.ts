import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://360.purize-filters.com/');
  await page.locator('div:nth-child(3)').first().click();
  await page.locator('div:nth-child(32) > div > div > div').first().click();
  await page.locator('div:nth-child(32) > div > div:nth-child(7)').click();
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);

});