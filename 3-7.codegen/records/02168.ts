import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://vr.ff.com/');
  await page.goto('http://vr.ff.com/us/');
  await page.locator('canvas').click({
    position: {
      x: 643,
      y: 368
    }
  });
  await page.locator('html').click();
  await page.locator('html').click();
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');

});