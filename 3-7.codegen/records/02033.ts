import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://thesong.thanhlongbay.vn/');
  await page.getByRole('button', { name: 'enter site' }).click();
});