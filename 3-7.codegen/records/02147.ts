import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://visualizer.akijceramics.net/room3d');
  await page.locator('canvas').click({
    position: {
      x: 753,
      y: 509
    }
  });
  await page.locator('#tile_149').getByRole('img').click();
});