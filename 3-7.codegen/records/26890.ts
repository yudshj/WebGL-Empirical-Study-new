import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.snakeisland.io/');
  await page.getByPlaceholder('player name').click();
  await page.getByPlaceholder('player name').fill('sadas');
  await page.getByRole('button', { name: 'Play!' }).click();
  await page.getByRole('button', { name: 'Select' }).click();
  await page.locator('canvas').click({
    position: {
      x: 678,
      y: 380
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 586,
      y: 335
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 738,
      y: 509
    }
  });
  await page.locator('canvas').click({
    clickCount: 3,
    position: {
      x: 777,
      y: 417
    }
  });
});