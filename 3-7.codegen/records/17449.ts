import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://tusiezaczelo.wkraj.pl/html5/index.php?id=72106');
  await page.getByRole('img').nth(2).click();
  await page.getByRole('img').nth(2).click();
  await page.getByTitle('Kliknij aby przejść do: Plac św. Jana Pawła II, widok na Bazylikę i pomnik św. Jana Pawła II ').getByRole('img').nth(1).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.locator('#key_1416667039506').getByRole('img').nth(1).click();
  await page.goto('https://tusiezaczelo.wkraj.pl/html5/index.php?id=72106#72998/NaN');
  await page.goto('https://tusiezaczelo.wkraj.pl/html5/index.php?id=72106#72999/NaN');
  await page.goto('https://tusiezaczelo.wkraj.pl/html5/index.php?id=72106#73000/NaN');
  await page.goto('https://tusiezaczelo.wkraj.pl/html5/index.php?id=72106#70492/336');
  await page.getByTitle('Kliknij aby przejść do: Bazylika Ofiarowania Najświętszej Maryi Panny - przedsionek').getByRole('img').nth(1).click();
});