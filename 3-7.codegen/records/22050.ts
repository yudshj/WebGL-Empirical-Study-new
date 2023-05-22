import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://lidar.geoportail.lu/');
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.locator('canvas').nth(1).click({
    position: {
      x: 215,
      y: 411
    }
  });
  await page.locator('canvas').nth(1).click({
    position: {
      x: 410,
      y: 374
    }
  });
});