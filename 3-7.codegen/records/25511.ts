import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.pico.party/');
  await page.getByPlaceholder('name').click();
  await page.getByPlaceholder('name').fill('mmmm');
  await page.getByRole('button', { name: 'play' }).click();
  await page.getByRole('button', { name: 'play' }).click();
  await page.getByRole('button', { name: 'play' }).click({
    clickCount: 5
  });
});