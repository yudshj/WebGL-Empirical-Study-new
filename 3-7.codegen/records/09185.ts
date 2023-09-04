import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://game.gutdem.com/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 623,
      y: 604
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 613,
      y: 604
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 650,
      y: 606
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 627,
      y: 643
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 630,
      y: 640
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 656,
      y: 642
    }
  });
});