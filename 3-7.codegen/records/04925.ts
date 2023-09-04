import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ank.global/');
  await page.getByRole('button', { name: 'Next slide' }).click();
  await page.getByRole('button', { name: 'Previous slide' }).click();
  await page.getByRole('link', { name: 'ENVIE SUA MENSAGEM ENVIE SUA MENSAGEM' }).click();
});