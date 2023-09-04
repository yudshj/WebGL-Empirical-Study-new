import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://simulador.palotinaesportes.com.br/simulador-3d/');
  await page.getByRole('listitem', { name: 'Volei Feminino' }).getByRole('link').click();
  await page.locator('.bt-seta_direita > .icone').first().click();
  await page.locator('.peca_inferior > .bt-seta_direita > .icone').click();
  await page.locator('.peca_inferior > .bt-seta_direita > .icone').click();
  await page.locator('.peca_inferior > .bt-seta_direita > .icone').click();
  await page.locator('.bt-seta_esquerda > .icone').first().click();
  await page.locator('.bt-seta_esquerda > .icone').first().click();
  await page.locator('.bt-seta_esquerda > .icone').first().click();
  await page.getByRole('listitem', { name: 'Futebol Masculino' }).getByRole('link').click();
  await page.getByRole('listitem', { name: 'Futebol Masculino' }).getByRole('link').click();
  await page.locator('#lupa_mais').click();
});