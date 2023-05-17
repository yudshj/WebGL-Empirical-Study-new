import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://chatchatgame.netlify.app/');
  await page.getByRole('button', { name: 'Click to start' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').press('Enter');
  await page.getByRole('button', { name: 'Create Room' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
});