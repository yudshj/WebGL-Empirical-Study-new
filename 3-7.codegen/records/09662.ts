import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://grandmaguey.com/tour-360/');
  await page.getByRole('button', { name: 'Aceptar' }).click();
  await page.locator('#elementor-popup-modal-1232').getByRole('link').first().click();
  await page.frameLocator('section >> internal:has-text="Recorrido virtual 360°"i >> iframe').locator('div:nth-child(2) > .Room__DefaultRoomImage-pxxumo-4').click();
  await page.frameLocator('section >> internal:has-text="Recorrido virtual 360°"i >> iframe').locator('div:nth-child(3) > .Room__DefaultRoomImage-pxxumo-4').click();
  await page.frameLocator('section >> internal:has-text="Recorrido virtual 360°"i >> iframe').locator('div:nth-child(4) > .Room__DefaultRoomImage-pxxumo-4').click();
});