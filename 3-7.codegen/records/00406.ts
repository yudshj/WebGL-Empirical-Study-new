import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://cheonan-sbsgame.com/');
  await page.locator('#slick-slide12').click();
});