import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://flyufo.io/');
  await page.locator('#gameContainer').click({
    position: {
      x: 633,
      y: 460
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 638,
      y: 505
    }
  });
  await page.keyboard.press('w', { delay: 1000 });
  await page.keyboard.press('a', { delay: 1000 });
});