import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.dish.in/');
  await page.goto('https://www.voxels.com/play?coords=E@1890E,1149N');
  await page.locator('#renderCanvas').click({
    position: {
      x: 547,
      y: 519
    }
  });
  await page.locator('#renderCanvas').press('ArrowUp');
  await page.locator('#renderCanvas').press('ArrowUp');
  await page.locator('#renderCanvas').press('ArrowUp');
  await page.locator('#renderCanvas').press('ArrowUp');
  await page.locator('#renderCanvas').press('ArrowUp');
  await page.locator('#renderCanvas').press('ArrowLeft');
  await page.locator('#renderCanvas').press('ArrowLeft');
  await page.locator('#renderCanvas').press('ArrowLeft');
  await page.locator('#renderCanvas').press('ArrowLeft');
  await page.locator('#renderCanvas').press('ArrowLeft');
  await page.locator('#renderCanvas').press('ArrowLeft');
  await page.locator('#renderCanvas').press('ArrowLeft');
  await page.locator('#renderCanvas').press('ArrowLeft');
  await page.locator('#renderCanvas').press('ArrowDown');
  await page.locator('#renderCanvas').press('ArrowDown');
  await page.locator('#renderCanvas').press('ArrowDown');
  await page.locator('#renderCanvas').press('ArrowDown');
  await page.locator('#renderCanvas').press('ArrowDown');
  await page.locator('#renderCanvas').press('ArrowDown');
  await page.locator('#renderCanvas').press('ArrowRight');
  await page.locator('#renderCanvas').press('ArrowRight');
  await page.locator('#renderCanvas').press('ArrowRight');
  await page.locator('#renderCanvas').press('ArrowRight');
  await page.locator('#renderCanvas').press('ArrowRight');
  await page.locator('#renderCanvas').click({
    position: {
      x: 547,
      y: 519
    }
  });
});