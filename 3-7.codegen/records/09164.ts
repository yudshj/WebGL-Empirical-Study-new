import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://galeriajordanowska.wkraj.pl/html5/index.php?id=79143');
  await page.goto('https://galeriajordanowska.wkraj.pl/html5/index.php?id=79143#79072/276,-3');
  await page.goto('https://galeriajordanowska.wkraj.pl/html5/index.php?id=79143');
  await page.getByTitle('Rozpocznij zwiedzanie od:Galeria Jordanowska').getByRole('img').nth(1).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByTitle('Kliknij aby przejść do: Wejście główne do Galerii Jordanowskiej').getByRole('img').nth(1).click();
  await page.getByTitle('Kliknij aby przejść do: Parter. Galeria Jordanowska').getByRole('img').nth(1).click();
  await page.getByTitle('Kliknij aby przejść do: Lotto').getByRole('img').nth(1).click();
});