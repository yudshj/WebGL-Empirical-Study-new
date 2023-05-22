import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://xn--d1agdhiam6b8d.xn--80acgfbsl1azdqr.xn--p1ai/');
  await page.getByRole('button', { name: 'x' }).click();
  await page.mouse.move(100, 100);
  await page.mouse.move(100, 200);
  await page.mouse.move(100, 300);
  await page.mouse.move(100, 400);
  await page.mouse.move(100, 500);
  
});