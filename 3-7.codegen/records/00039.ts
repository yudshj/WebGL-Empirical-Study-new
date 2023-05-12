import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://3d.kommunekart.com/');
  await page.goto('http://3d.kommunekart.com/?x=51&y=9.999999999999973&z=2499999.9999989406&head=360&pitch=-64.99999999999997&roll=360');
  await page.locator('canvas').click({
    position: {
      x: 681,
      y: 336
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 416,
      y: 332
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 220,
      y: 360
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 255,
      y: 328
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 158,
      y: 329
    }
  });
});