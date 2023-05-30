import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://havenstudios.com/en');
  await page.locator('canvas').click({
    position: {
      x: 700,
      y: 578
    }, delay: 5000
  });
  await page.locator('canvas').click({
    position: {
      x: 700,
      y: 576
    }, delay: 5000
  });
  await page.locator('canvas').click({
    position: {
      x: 700,
      y: 576
    }, delay: 5000
  });
  await page.locator('canvas').click({
    position: {
      x: 700,
      y: 576
    }, delay: 5000
  });
  await page.locator('canvas').click({
    position: {
      x: 700,
      y: 576
    }, delay: 5000
  });
  await page.mouse.move(100, 100);
});