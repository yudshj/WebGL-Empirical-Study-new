import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://5739343422888838384324.angelangelangelangelangel.com/');
  await page.locator('canvas').click({
    position: {
      x: 662,
      y: 233
    }
  });
});