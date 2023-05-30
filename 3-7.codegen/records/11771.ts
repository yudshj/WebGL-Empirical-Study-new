import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://gd.games/zendevve/poyothepoultrypaladin');
  await page.frameLocator('#root iframe').locator('canvas').click({
    position: {
      x: 726,
      y: 429
    }
  });
  await page.frameLocator('#root iframe').locator('canvas').click({
    position: {
      x: 258,
      y: 392
    }
  });
  await page.frameLocator('#root iframe').locator('canvas').click({
    position: {
      x: 534,
      y: 292
    }
  });
  await page.frameLocator('#root iframe').locator('canvas').press('ArrowRight');
  await page.frameLocator('#root iframe').locator('canvas').press('ArrowUp');
  await page.frameLocator('#root iframe').locator('canvas').press('ArrowLeft');
  await page.frameLocator('#root iframe').locator('canvas').press('ArrowRight');
  await page.frameLocator('#root iframe').locator('canvas').press('ArrowDown');
});