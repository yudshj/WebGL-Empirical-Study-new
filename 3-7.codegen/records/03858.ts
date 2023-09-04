import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.transportesnovaera.com.br/conteudo/compromisso-total-com-sua-empresa/1');
});