import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://etherminators.com/');
  await page.goto('https://mint.etherminators.com/');
  await page.mouse.move(100, 100);
  await page.mouse.move(100, 100);
  await page.mouse.move(100, 100);
});