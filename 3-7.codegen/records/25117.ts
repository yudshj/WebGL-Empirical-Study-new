import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.octagon-exe.com/');
  await page.locator('canvas').click({
    position: {
      x: 638,
      y: 366
    }
  });
});