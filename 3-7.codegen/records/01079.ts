import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://js-racing.knockknock.jp/');
  await page.getByRole('link', { name: 'PLAY' }).click();
});