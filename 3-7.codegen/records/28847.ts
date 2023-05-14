import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://xinguan.en.taiwantrade.com/');
  await page.getByRole('link', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'I Agree' }).click();
});