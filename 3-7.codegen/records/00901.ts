import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://gte.arkivert.no/');
  await page.locator('#intro canvas').click({
    position: {
      x: 28,
      y: 372
    }
  });
});