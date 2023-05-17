import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://zagrevanjezaqatar.rs/');
  await page.frameLocator('iframe').locator('#canvas').click({
    position: {
      x: 727,
      y: 456
    }
  });
  await page.frameLocator('iframe').locator('#canvas').click({
    position: {
      x: 340,
      y: 149
    }
  });
  await page.frameLocator('iframe').locator('#canvas').click({
    position: {
      x: 330,
      y: 218
    }
  });
});