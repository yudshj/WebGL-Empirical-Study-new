import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://deanssmart.github.io/the-gallery/');
  await page.keyboard.press('w', { delay: 1000 });
  await page.keyboard.press('w', { delay: 1000 });
  await page.keyboard.press('d', { delay: 1000 });
  await page.mouse.move(100, 100);
});