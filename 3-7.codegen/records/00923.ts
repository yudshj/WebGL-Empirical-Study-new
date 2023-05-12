import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://harita.duzce.bel.tr/');
  await page.frameLocator('#iframe-map').locator('#map_id canvas').click({
    position: {
      x: 83,
      y: 200
    }
  });
  await page.frameLocator('#iframe-map').getByTitle('Yakınlaştır').locator('span').click();
  await page.frameLocator('#iframe-map').getByTitle('Yakınlaştır').locator('span').click();
});