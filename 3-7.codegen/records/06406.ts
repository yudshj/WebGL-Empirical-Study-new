import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://casabatllo.dgrees.studio/');
  await page.getByText('t', { exact: true }).first().click();
  await page.getByText('Casa Batlló presenta 10D ExperienceUna nueva visita fascinante Entrar').click();
  await page.getByRole('paragraph').filter({ hasText: 'Casa Batlló presenta' }).click();
  await page.locator('#opener').click();
  await page.getByRole('link', { name: 'O r i g e n' }).click();
  await page.locator('div:nth-child(3) > .arrow__item').click();
  await page.locator('div:nth-child(3) > .arrow__item').click();
  await page.locator('div:nth-child(3) > .arrow__item').click();
  await page.getByRole('link', { name: 'E n t r a r' }).click();
});