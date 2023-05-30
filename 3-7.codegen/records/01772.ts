import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://royalesurvival.io/');
  await page.getByRole('button', { name: 'Play' }).click();
  await page.getByPlaceholder('Enter your name').click();
  await page.getByPlaceholder('Enter your name').fill('123');
  await page.getByRole('button', { name: 'Play' }).click();
  await page.goto('http://royalesurvival.io/');
  await page.getByPlaceholder('Enter your name').click();
  await page.getByPlaceholder('Enter your name').click();
  await page.getByPlaceholder('Enter your name').fill('sad');
  await page.getByRole('button', { name: 'Play' }).click();
});