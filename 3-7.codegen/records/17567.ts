import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://ultimatewalrus.com/');
  await page.locator('canvas').click({
    position: {
      x: 644,
      y: 384
    }
  });
});