import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://lego-art-remix.com/');
  await page.getByRole('button', { name: 'Select Input Image' }).click();
  await page.getByRole('button', { name: 'Select Input Image' }).setInputFiles('1.jpg');
});