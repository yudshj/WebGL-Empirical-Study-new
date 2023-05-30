import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://bricklayerdao.xyz/');
  await page.mouse.down();
  await page.mouse.move(100, 100);
  await page.mouse.up();
});