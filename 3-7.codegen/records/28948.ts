import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://yelloworld.pinkyellow.com/');
  await page.locator('canvas').nth(1).click({
    position: {
      x: 671,
      y: 406
    }
  });
});