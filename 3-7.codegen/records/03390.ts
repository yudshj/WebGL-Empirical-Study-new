import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.novo.clinicadosonodecuritiba.com.br/clinica');
  await page.frameLocator('iframe').getByRole('img', { name: 'Zoom in' }).click();
  await page.frameLocator('iframe').getByRole('img', { name: 'Zoom out' }).click();
});