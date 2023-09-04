import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://institucional.favoritosupermercados.com.br/');
  await page.getByRole('link', { name: ' Próximo' }).click();
  await page.getByRole('link', { name: ' Próximo' }).click();
  await page.getByRole('link', { name: ' Anterior' }).click();
  await page.getByRole('button', { name: 'Zoom out' }).click();
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await page.getByRole('button', { name: 'Drag Pegman onto the map to open Street View' }).click();
  await page.locator('div:nth-child(3) > div:nth-child(8)').click();
});