import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://vr.ff.com/us/');
  await page.locator('canvas').click({
    position: {
      x: 671,
      y: 420
    }
  });
});