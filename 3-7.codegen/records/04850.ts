import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://amuravela.com/');
  await page.getByRole('link', { name: 'Leer la última Amuravela →' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'Escrita porCesáreo Marqués Valle →' }).getByRole('link', { name: 'Cesáreo Marqués Valle →' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Pixuetu Valley' }).click();
  const page1 = await page1Promise;
});