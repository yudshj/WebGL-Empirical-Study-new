import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://slothtopia.io/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 426,
      y: 304
    }
  });
  await page.locator('#WEB3_CONNECT_MODAL_ID div').nth(2).click();
  await page.locator('#unity-canvas').click({
    position: {
      x: 800,
      y: 164
    }
  });
});