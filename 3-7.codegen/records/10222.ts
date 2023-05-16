import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://houseofwisdoms.gamebrain.ca/');
  await page.locator('canvas').click({
    position: {
      x: 196,
      y: 585
    }
  });
  await page.locator('canvas').click({
    clickCount: 4,
    position: {
      x: 204,
      y: 532
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 218,
      y: 581
    }
  });
});