import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://estadisticas.sinaloa.gob.mx/');
  await page.getByRole('link', { name: ' Next' }).click();
});