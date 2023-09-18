import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  for (let i = 0; i < 20; i++) {
    await page.mouse.wheel(0, 10);
  }
});