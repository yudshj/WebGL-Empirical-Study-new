import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.fernandacasagrande.com.br/');
  await page.getByRole('link', { name: 'Dra. Fernanda' }).click();
  await page.getByRole('link', { name: 'Agende sua Consulta' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'Contato' }).click();
});