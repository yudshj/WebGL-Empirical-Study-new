import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://1v1.fail/');
  await page.locator('#canvas').click({
    position: {
      x: 1079,
      y: 625
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 1080,
      y: 631
    }
  });
});