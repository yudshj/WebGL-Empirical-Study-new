import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://acikriza.izmirteknoloji.com.tr/');
  await page.goto('https://kvknet.com.tr/');
  await page.locator('rs-arrow').nth(1).click();
  await page.locator('#ld_carousel_tab_649c3d8d27590 > .carousel-items').click();
});