import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://app.webaverse.com/');
  await page.keyboard.press('w');
  await page.mouse.move(50, 0);
});