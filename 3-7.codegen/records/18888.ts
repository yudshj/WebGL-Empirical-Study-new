import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.akson45.net/ru/');
  await page.locator('canvas').click({
    position: {
      x: 756,
      y: 346
    }
  });
});