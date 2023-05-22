import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://thatshaman.com/games/flappy/');
  await page.getByRole('link').first().click();
  await page.locator('#output').click({
    position: {
      x: 801,
      y: 261
    }
  });
  await page.getByRole('link').first().click();
  await page.keyboard.press('Space');
  await page.keyboard.press('Space');
  await page.keyboard.press('Space');
  await page.keyboard.press('Space');
  await page.keyboard.press('Space');
  await page.keyboard.press('Space');
  await page.keyboard.press('Space');
  await page.keyboard.press('Space');
});