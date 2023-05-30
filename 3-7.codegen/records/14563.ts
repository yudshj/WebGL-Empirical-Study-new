import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://poster.nordik.org/');
  await page.getByRole('button', { name: 'Start !' }).click();
  await page.locator('section').filter({ hasText: 'Étape 1 Choisi la couleur des informations and next ! Noir Blanc Next →' }).getByRole('button', { name: 'Next →' }).click();
  await page.getByRole('button', { name: 'Blawan — Stell Ternesc Records' }).click();
  await page.getByRole('button', { name: 'Laurent Garnier — The sound of the big babou F Communications' }).click();
  await page.getByText('Étape 2 On sélectionne son morceau dans la playlist. On clique sur pause and ne').click();
  await page.locator('section').filter({ hasText: 'Étape 2 On sélectionne son morceau dans la playlist. On clique sur pause and ne' }).getByRole('button', { name: 'Pause' }).click();
  await page.getByRole('button', { name: 'Next →' }).click();
  await page.locator('#js-rangeslider-1').click();
  await page.locator('#js-rangeslider-0').click();
  await page.getByRole('button', { name: 'Pause' }).click();
  await page.locator('#js-rangeslider-0').click();
  await page.locator('#js-rangeslider-0').click();
  await page.getByRole('button', { name: 'Finaliser →' }).click();
});