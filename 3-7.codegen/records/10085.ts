import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://hole-io.com/');
  await page.locator('#gameContainer').click({
    position: {
      x: 759,
      y: 567
    }
  });
});