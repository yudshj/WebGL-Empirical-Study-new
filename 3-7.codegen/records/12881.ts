import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://molstack.com/');
  await page.locator('#app-main').click({
    position: {
      x: 645,
      y: 518
    }
  });
});