import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://dopingcontrol-48d0f.web.app/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 651,
      y: 421
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 591,
      y: 387
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 573,
      y: 374
    }
  });
});