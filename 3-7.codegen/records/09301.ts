import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://geometry.enclavegames.com/');
  await page.locator('canvas').click({
    position: {
      x: 278,
      y: 357
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 206,
      y: 212
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 218,
      y: 131
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 275,
      y: 588
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 361,
      y: 576
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 198,
      y: 448
    }
  });
});