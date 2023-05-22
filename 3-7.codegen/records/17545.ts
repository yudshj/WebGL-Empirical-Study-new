import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://uj.wkraj.pl/html5/index.php?id=48942');
  await page.getByTitle('Rozpocznij zwiedzanie od:Zdjęcie 80994').getByRole('img').nth(1).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.locator('#key_1509275098877').getByRole('img').nth(1).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByTitle('Kliknij aby przejść do: Panorama 47226').getByRole('img').nth(1).click();
});