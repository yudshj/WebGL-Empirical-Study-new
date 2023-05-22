import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://obpsurgical.com/lx/');
  await page.mouse.wheel(0, -200);
});