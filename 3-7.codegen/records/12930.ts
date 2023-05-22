import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://morefurniture.id/moreverse');
  await page.getByRole('button', { name: 'MOREVERSE CLICK TO ENTER' }).click();
  await page.getByRole('button', { name: 'SKIP' }).click();
  await page.locator('#tutorial-inside').getByRole('img').click();
  await page.locator('#game-canvas').click({
    position: {
      x: 631,
      y: 495
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 604,
      y: 506
    }
  });
});