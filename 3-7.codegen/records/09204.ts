import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://games2master.com/games/card-games/call-break/');
  await page.locator('#canvas').click({
    position: {
      x: 378,
      y: 356
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 336,
      y: 247
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 370,
      y: 318
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 369,
      y: 304
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 196,
      y: 330
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 349,
      y: 342
    }
  });
});