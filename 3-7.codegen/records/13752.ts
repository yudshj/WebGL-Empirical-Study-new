import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://onevone.firebaseapp.com/');
  await page.locator('#gameContainer').click({
    position: {
      x: 806,
      y: 548
    }
  });
});