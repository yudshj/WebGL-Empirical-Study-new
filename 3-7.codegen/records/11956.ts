import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://lucid-knuth-707409.netlify.app/');
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').setInputFiles('1.jpg');
});