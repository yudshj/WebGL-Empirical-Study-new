import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://juegofantasma2.com/');
  await page.locator('canvas').click({
    position: {
      x: 635,
      y: 575
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 645,
      y: 645
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 564,
      y: 438
    }
  });
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowLeft');
});