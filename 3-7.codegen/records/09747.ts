import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://guccidive.gucci.com/');
  await page.getByRole('button', { name: 'SELECT SUBMARINE' }).click();
  await page.getByRole('button', { name: 'Let\'s dive!' }).click();
  await page.getByRole('button', { name: 'Boost!' }).click();
});