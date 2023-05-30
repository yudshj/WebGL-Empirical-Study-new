import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://360.tourismus-neuruppin.de/');
  await page.getByText('Tour starten').click();
  await page.locator('div:nth-child(45) > div > div').first().click();
  await page.locator('div:nth-child(3) > div:nth-child(6) > div > div').first().click();
  await page.getByText('VideoBraschplatzTouristinformationAm Neuen MarktNeuruppinWillkommen an BordFahrg').click();
  await page.mouse.wheel(0, -100);
});