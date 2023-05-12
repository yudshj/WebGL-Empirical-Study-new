import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://meome.t.u-tokyo.ac.jp/');
  await page.getByRole('link', { name: 'ENTER' }).click();
});