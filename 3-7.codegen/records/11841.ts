import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ljof.ba/');
  await page.locator('#slider-2-slide-2-layer-28').click();
});