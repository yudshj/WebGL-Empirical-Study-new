import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.cleo.show/');
  await page.locator('circle').nth(1).click();
  await page.locator('#main-stage').click({
    position: {
      x: 626,
      y: 424
    }
  });
});