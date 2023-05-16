import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://mmoquest.com/');
  await page.getByRole('cell', { name: 'Start the game' }).click();
  await page.getByRole('cell', { name: 'Sheyvanin' }).getByRole('img').click();
  await page.goto('https://mmoquest.com/');
});