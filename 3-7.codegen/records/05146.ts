import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ariill-design.jp/');
  await page.getByRole('img', { name: 'Web制作' }).click();
});