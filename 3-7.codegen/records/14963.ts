import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://recruit.cloudcircus.jp/');
  await page.getByRole('button', { name: 'ENTRY' }).click();
});