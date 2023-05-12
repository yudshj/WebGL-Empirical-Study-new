import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://crea.cocinas-tpc.com/');
  await page.getByRole('button', { name: 'Permitir todo' }).click();
  await page.getByRole('button', { name: 'CREAR COCINA GUIADA' }).click();
});