import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://explorer.unbounded.earth/');
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.locator('#my-canvas').click({
    position: {
      x: 526,
      y: 332
    }
  });
  await page.locator('#my-canvas').click({
    position: {
      x: 558,
      y: 310
    }
  });
  await page.locator('#my-canvas').click({
    position: {
      x: 339,
      y: 137
    }
  });
  await page.locator('#my-canvas').click({
    position: {
      x: 743,
      y: 302
    }
  });
});