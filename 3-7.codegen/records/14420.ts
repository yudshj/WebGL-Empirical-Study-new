import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://playbeatthat.acura.com/?awd');
  await page.locator('canvas').click({
    position: {
      x: 630,
      y: 386
    }
  });
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowRight');
});