import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.offpixel.co/');
  await page.getByText('3D').click();
  await page.mouse.move(100, 100);
  await page.mouse.move(200, 200);
});