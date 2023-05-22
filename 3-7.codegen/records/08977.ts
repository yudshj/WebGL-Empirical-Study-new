import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://forma.dl.it.unity3d.com/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 562,
      y: 281
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 922,
      y: 452
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 112,
      y: 613
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 167,
      y: 518
    }
  });
});