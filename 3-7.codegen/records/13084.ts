import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://mvp.cybertribe.io/');
  await page.locator('[id="\\#canvas"]').click({
    position: {
      x: 641,
      y: 531
    }
  });
  await page.locator('[id="\\#canvas"]').click({
    position: {
      x: 853,
      y: 333
    }
  });
});