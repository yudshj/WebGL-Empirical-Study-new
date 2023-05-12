import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://playdoh-lagaleriedesespeces.com/en/');
  await page.locator('canvas').click({
    position: {
      x: 986,
      y: 568
    }
  });
});