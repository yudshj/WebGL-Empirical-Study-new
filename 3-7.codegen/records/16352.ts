import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://starguardian.riotgames.com/');
  await page.goto('https://starguardian.riotgames.com/en-us/');
  await page.getByRole('button', { name: 'EXPLORE' }).click();
  await page.getByTestId('introduction:skip-button').click();
  await page.goto('https://starguardian.riotgames.com/en-us/');
  await page.getByRole('button', { name: 'EXPLORE' }).click();
  await page.getByTestId('introduction:skip-button').click();
});