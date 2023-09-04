import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.simobsolucoesimobiliarias.com.br/i/terreno/parque-das-palmeiras/166133');
  await page.locator('#detalhado-right').click();
  await page.getByRole('button', { name: '−' }).click();
});