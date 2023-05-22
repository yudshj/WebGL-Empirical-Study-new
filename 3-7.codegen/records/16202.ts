import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://sourdoughlibrary.puratos.com/en');
  await page.getByRole('button', { name: 'dismiss cookie message' }).click();
  await page.getByRole('link', { name: 'The Sourdough History The Future of Bread Lies in its Past. Discover the story in 360 degrees. VIEW 360° VIDEO' }).click();
  await page.getByRole('button', { name: 'Ok, I got it' }).click();
  await page.getByRole('button', { name: 'Ok, I got it' }).click();
  await page.getByRole('button', { name: 'Ok, I got it' }).click();
  await page.locator('html').click();
  await page.getByRole('button', { name: 'Ok, I got it' }).click();
  await page.getByRole('button', { name: 'Ok, I got it' }).click();
  await page.getByRole('button', { name: 'Ok, I got it' }).click({
    clickCount: 3
  });
  await page.getByRole('button', { name: 'Ok, I got it' }).click();
});