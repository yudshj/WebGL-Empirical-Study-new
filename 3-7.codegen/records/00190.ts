import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://arx.dnmont.dp.ua/');
  await page.getByRole('img').click();
  await page.getByRole('img').nth(3).click();
  await page.getByRole('img').click();
  await page.getByRole('img').nth(2).click();
});