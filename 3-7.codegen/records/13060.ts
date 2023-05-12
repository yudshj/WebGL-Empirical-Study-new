import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://museodelhongo.cl/home/');
  await page.getByRole('button', { name: 'ENTRA A NUESTRA SEDE VIRTUAL >' }).click();
  await page.getByRole('link', { name: 'ENTRAR' }).click();
});