import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.viverse.com/');
  await page.getByRole('link', { name: 'Explore VIVERSE' }).click();
  await page.getByRole('img', { name: '2023 SCFD SHOW' }).click();
  await page.getByRole('button', { name: 'Join' }).click();
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Display name').click();
  await page.getByLabel('Display name').fill('8888');
  await page.getByRole('button', { name: 'Done' }).click();
});