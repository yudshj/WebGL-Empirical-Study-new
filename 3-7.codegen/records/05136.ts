import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://arena.tronlaserarena.cz/3d-mapa-areny/');
  await page.mouse.wheel(0, -100);
  await page.locator('canvas').click({
    position: {
      x: 744,
      y: 362
    }
  });
});