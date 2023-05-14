import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://ava-sessions.com/');
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('123');
  await page.getByRole('button', { name: '[ Submit ]' }).click();
  await page.getByRole('button', { name: '[ No ]' }).click();
  await page.getByRole('button', { name: '[ Choose an image ]' }).click();
  await page.getByRole('button', { name: '[ Choose an image ]' }).setInputFiles('1.jpg');
});