import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://atrioimoveis.com.br/vendagoianiaparque-atheneu/imovel-comercial-predio-2-salas-comerciais-apto-no-piso-2-barracao-no-fundo-e-um-apartamento.-area-do-lote-450-m2-parque-atheneu-goiania-go');
  await page.locator('.bx-next').first().click();
  await page.locator('.bx-next').first().click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Zoom in' }).click();
});