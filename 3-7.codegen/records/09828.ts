import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://hanabi.liginc.co.jp/');
  await page.getByRole('button', { name: 'ON' }).click();
  await page.getByRole('button', { name: 'LET’S FIRE' }).click();
  await page.locator('label').click();
  await page.getByText('100 LIG HANABI SWEET SUMMER MEMORIES PLEASE SELECT THE SOUND WE RECOMMEND THE SO').setInputFiles('1.jpg');
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.getByPlaceholder('140 characters or less.').click();
  await page.getByPlaceholder('140 characters or less.').fill('123');
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.getByRole('listitem').filter({ hasText: 'KIKU' }).getByRole('button').click();
  await page.getByRole('button', { name: '忘' }).click();
  await page.getByRole('button', { name: 'IN MIND' }).click();
  await page.getByRole('button', { name: 'IN MIND' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'FIRE' }).click();
  await page.getByRole('button', { name: 'SHOUT' }).click();
  await page.getByRole('button', { name: 'SHOUT' }).click();
});