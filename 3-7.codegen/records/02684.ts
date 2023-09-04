import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.distritohotel.com.ar/');
  await page.frameLocator('section >> internal:has-text="Nuestro Hotel Recorrido virtual"i >> iframe').locator('div:nth-child(5) > div:nth-child(2)').first().click();
  await page.frameLocator('section >> internal:has-text="Nuestro Hotel Recorrido virtual"i >> iframe').locator('div:nth-child(9)').first().click();
});