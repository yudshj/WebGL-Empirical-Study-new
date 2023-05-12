import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://hiroshima.archiving.jp/');
  await page.goto('https://hiroshima.archiving.jp/index_en.html');
});