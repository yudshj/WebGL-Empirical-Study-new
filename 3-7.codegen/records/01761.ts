import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://rocksetta.com/tensorflowjs/');
  await page.getByRole('link', { name: 'pre-trained/32-mobilenet.html' }).click();
  await page.getByRole('button', { name: 'Load Model' }).click();
  await page.getByRole('button', { name: 'get Pic' }).click();
  await page.getByRole('button', { name: 'Predict' }).click();
});