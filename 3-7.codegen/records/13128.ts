import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://myland.earth/');
  await page.locator('#slider-10-slide-18-layer-0 img').click();
  await page.locator('#slider-10-slide-19-layer-0 img').click();
});