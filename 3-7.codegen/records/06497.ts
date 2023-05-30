import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.moypolk.ru/login');
  await page.getByRole('link', { name: 'Зарегистрироваться' }).click();
  await page.getByLabel('Ваш email\n                *').click();
  await page.getByLabel('Ваш email\n                *').fill('asda@ss.com');
  await page.getByLabel('Ваш телефон').click();
  await page.getByLabel('Ваш телефон').fill('v');
  await page.getByLabel('Ваш телефон').click();
  await page.getByLabel('Ваш телефон').fill('123');
  await page.getByLabel('Ваш пароль\n                *').click();
  await page.getByLabel('Ваш телефон').click();
  await page.getByLabel('Ваш телефон').fill('');
  await page.getByLabel('Ваш пароль\n                *').click();
  await page.getByLabel('Ваш пароль\n                *').fill('123456');
  await page.getByLabel('Подтвердите пароль\n                *').click();
  await page.getByLabel('Подтвердите пароль\n                *').fill('123456');
  await page.getByLabel('Ваша фамилия\n                *').click();
  await page.getByLabel('Ваша фамилия\n                *').fill('wadwadw');
  await page.getByLabel('Ваше имя\n                *').click();
  await page.getByLabel('Ваше имя\n                *').fill('sadqwd');
  await page.getByRole('button', { name: 'ЗАРЕГИСТРИРОВАТЬСЯ' }).click();
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByLabel('Ваш email\n                *').click();
  await page.getByLabel('Ваш email\n                *').fill('asdaf');
  await page.getByLabel('Ваш email\n                *').click();
  await page.getByLabel('Ваш email\n                *').fill('asda@ss.com');
  await page.getByLabel('Ваш пароль\n                *').click();
  await page.getByLabel('Ваш пароль\n                *').fill('123456');
  await page.getByRole('button', { name: 'ВОЙТИ' }).click();
});