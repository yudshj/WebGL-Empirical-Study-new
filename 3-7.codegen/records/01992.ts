import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://tarifas.tragsa.es/');
  await page.goto('https://www.tragsa.es/es/grupo-tragsa/regimen-juridico/tarifas/Paginas/default.aspx');
});