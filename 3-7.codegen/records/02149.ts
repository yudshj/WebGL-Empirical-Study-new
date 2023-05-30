import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://visualizer.rakcerambd.com/room3d');
  await page.locator('canvas').click({
    position: {
      x: 695,
      y: 386
    }
  });
});