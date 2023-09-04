import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://madeiranit.corte.cloud/');
  await page.goto('https://madeiranit.corte.cloud/#/');
  await page.goto('https://madeiranit.corte.cloud/#/loading');
  await page.goto('https://madeiranit.corte.cloud/#/login');
  await page.goto('https://madeiranit.corte.cloud/#/whitelabel-invalid');
  await page.getByRole('button', { name: 'Ir para o site https://cortecloud.com.br' }).click();
});