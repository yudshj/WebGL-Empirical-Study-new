import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://game.playposeidon.io/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 782,
      y: 495
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 764,
      y: 493
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 765,
      y: 493
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 765,
      y: 493
    }
  });
});