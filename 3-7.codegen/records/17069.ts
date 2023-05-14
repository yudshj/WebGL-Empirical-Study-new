import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://threejs-journey.com/');
  await page.locator('div').filter({ hasText: 'Level 00 01 02 03 04 05 Click to explore' }).locator('canvas').click({
    position: {
      x: 440,
      y: 577
    }
  });
});