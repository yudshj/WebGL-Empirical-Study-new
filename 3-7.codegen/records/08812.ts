import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://findface.netlify.app/');
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').setInputFiles('1.jpg');
});