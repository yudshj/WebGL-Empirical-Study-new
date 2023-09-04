import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.dddd.ir/%D9%85%D8%B4%D8%AA%D8%B1%DB%8C%D8%A7%D9%86.html');
});