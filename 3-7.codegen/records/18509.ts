import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {

  await page.goto('https://wom5years.cl/');
  await page.goto('https://wom5years.cl/#/cumple1');
  await page.locator('.tapa').click();
  await page.locator('.tapa').click();
  await page.locator('.tapa').click();
  await page.locator('div').filter({ hasText: /^2016$/ }).first().click();
  await page.getByRole('img').nth(2).click();
  await page.locator('canvas').click({
    position: {
      x: 602,
      y: 281
    }
  });
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});