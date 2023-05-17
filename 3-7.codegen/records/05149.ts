import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://aritelia.io/play/');
  await page.goto('https://aritelia.io/play/?island=0_-1');
  await page.locator('#application-canvas').click({
    position: {
      x: 171,
      y: 629
    }
  });
});