import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.dojacat.com/');
  await page.getByRole('button', { name: 'World' }).click();
  await page.locator('.costume-4').click();
  await page.locator('canvas').click({
    position: {
      x: 274,
      y: 505
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 304,
      y: 490
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 125,
      y: 308
    }
  });
  await page.getByRole('button', { name: 'Sure!' }).click();
  await page.locator('canvas').click({
    position: {
      x: 80,
      y: 273
    }
  });
});