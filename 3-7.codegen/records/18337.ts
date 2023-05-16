import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://webgl.kleerun.game/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 483,
      y: 294
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 499,
      y: 381
    }
  });
});