import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://source-academy.github.io/');
  await page.goto('https://sourceacademy.org/');
  await page.goto('https://sourceacademy.org/playground');
  await page.getByRole('button', { name: 'Run' }).click();
});