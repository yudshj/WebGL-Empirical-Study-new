import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://roogar.de/');
  await page.getByPlaceholder('Nick').click();
  await page.getByPlaceholder('Nick').fill('123');
  await page.getByRole('button', { name: 'Play' }).click();
});