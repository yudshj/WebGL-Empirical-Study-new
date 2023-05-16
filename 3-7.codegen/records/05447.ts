import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://awakening.legendsoflearning.com/play');
  await page.locator('#unity-canvas').click({
    position: {
      x: 623,
      y: 558
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 1010,
      y: 579
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 1011,
      y: 474
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 966,
      y: 558
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 981,
      y: 553
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 954,
      y: 489
    }
  });
});