import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.francoisrisoud.com/');
  await page.getByRole('link', { name: 'Get to know me.' }).click();
  await page.mouse.move(100,100);
  await page.mouse.move(-200, -200);
  await page.mouse.move(-100,100);
});