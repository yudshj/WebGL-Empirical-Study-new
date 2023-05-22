import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.petpenguins.com/');
  await page.locator('#touch-btn').click();
  await page.locator('#move-btn').click();
  await page.locator('#mainCanvas').dblclick();
  await page.locator('#move-btn').click();
  await page.getByText('+').click();
  await page.getByText('-').click();
  await page.getByText('+').click();
  await page.locator('#feed-btn').click();
  await page.locator('#touch-btn').click();
  await page.locator('#feed-btn').click();
  await page.locator('#move-btn').click();
  await page.getByText('+').click();
  await page.getByText('-').click();
  await page.locator('#mainCanvas').click({
    position: {
      x: 328,
      y: 344
    }
  });
});