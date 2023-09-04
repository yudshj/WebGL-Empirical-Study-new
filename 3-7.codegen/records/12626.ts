import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://mercattoimoveis.com.br/');
  await page.locator('#box-destaques').getByRole('button', { name: '' }).click();
  await page.locator('#box-corretores').getByRole('button', { name: '' }).click();
  await page.locator('#box-biblioteca').getByRole('button', { name: '' }).click();
  await page.locator('#box-videos').getByRole('button', { name: '' }).click();
});