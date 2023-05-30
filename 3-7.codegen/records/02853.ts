import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.georgeandjonathan.com/');
  await page.goto('https://www.georgeandjonathan.com/#1');
  await page.locator('#playbar-controls-play-pause').click();
  await page.locator('canvas').click({
    position: {
      x: 611,
      y: 374
    }
  });
});