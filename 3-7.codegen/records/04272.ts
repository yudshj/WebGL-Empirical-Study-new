import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://3seconds.netlify.app/');
  await page.goto('https://3seclab.com/test/0/');
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').setInputFiles('1.jpg');
  await page.getByRole('link', { name: '이쁜 눈' }).click();
  await page.getByRole('link', { name: '장난꾸러기' }).click();
});