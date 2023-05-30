import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://playbeatthat.acura.com/');
  await page.locator('canvas').click({
    position: {
      x: 619,
      y: 307
    }
  });
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
});