import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://3d.taipei/');
  page.mouse.wheel(0, -100);
  page.mouse.wheel(0, -100);
  page.mouse.wheel(0, -100);
  await page.getByRole('button', { name: '統計臺北' }).click();
  await page.getByRole('link', { name: '4D統計地圖' }).click();
});