import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.banxico.org.mx/mibanxico/');
  await page.locator('#TLP2 > .TLC2').click();
  await page.locator('#TLP3 > .TLC2').click();
  await page.locator('#TLP4 > .TLC2').click();
  await page.locator('#TLP5 > .TLC2').click();
  await page.locator('#ShowMenu span').click();
});