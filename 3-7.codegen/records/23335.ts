import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.juegofantasma.com/');
  await page.locator('canvas').click({
    position: {
      x: 691,
      y: 444
    }
  });
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowLeft');
});