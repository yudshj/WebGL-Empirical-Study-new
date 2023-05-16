import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.napolitano.io/');
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Generate code' }).click();
  await page.goto('https://www.napolitano.io/about');
});