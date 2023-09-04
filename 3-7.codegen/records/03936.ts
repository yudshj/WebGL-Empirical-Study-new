import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.waidhofen-land.at/');
  await page.getByText('Alle akzeptieren').first().click();
  await page.locator('#slickSlider226721707').getByRole('button', { name: 'Next' }).click();
  await page.locator('#slickslidercontainer226721740').getByRole('button', { name: 'Next' }).click();
});