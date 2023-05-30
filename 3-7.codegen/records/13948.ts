import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://out-of-doors.lostmechanics.com/');
  await page.getByRole('button', { name: 'Let\'s get started' }).click();
  await page.getByPlaceholder('Your name').fill('asd');
  await page.getByPlaceholder('Your name').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'TAP IN THE CENTRE' }).click();
  await page.locator('.game-stack > .cible').click();
  await page.locator('.game-stack > .cible').click();
  await page.locator('.game-stack > .cible').click();
  await page.locator('div:nth-child(20) > .card__translater > .card__randomiser > .card__rotator').click();
});