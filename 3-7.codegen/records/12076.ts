import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://m.schub.top/demo/');
  await page.getByRole('button', { name: '球体' }).click();
  await page.getByRole('button', { name: '螺旋' }).click();
});