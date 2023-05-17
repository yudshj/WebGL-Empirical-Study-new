import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://changliu.io/');
  await page.locator('canvas').click({
    position: {
      x: 601,
      y: 386
    },
    delay: 10_000
  });
});