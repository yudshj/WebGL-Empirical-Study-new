import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://net-literacy.yahoo.co.jp/');
  await page.getByRole('link', { name: '今すぐスタート' }).first().click();
  await page.getByRole('link', { name: '問題に進む' }).click();
  await page.getByText('次へ').click();
  await page.getByText('A何も問題ない').click();
  await page.getByText('解答する').click();
});