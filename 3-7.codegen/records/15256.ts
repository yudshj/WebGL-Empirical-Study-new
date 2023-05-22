import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://routefifty.caffeina.com/');
  await page.getByLabel('Enter your nickname').click();
  await page.getByRole('button', { name: 'START GAME START GAME' }).click();
  await page.getByLabel('Enter your nickname').click();
  await page.getByLabel('Enter your nickname').fill('dsa');
  await page.getByRole('button', { name: 'START GAME START GAME' }).click();
  await page.getByRole('button', { name: 'GOT IT! GOT IT!' }).press('ArrowRight');
  await page.getByText('BASIC KNOWLEDGEMOVE THE SHIP WITH THE ARROWSSWIPE TO MOVE THE SHIPBOOST YOUR SPE').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'GOT IT! GOT IT!' }).click();
});