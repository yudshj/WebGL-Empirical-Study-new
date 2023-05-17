import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://konterball.com/');
  await page.getByRole('button', { name: 'Let’s Go' }).click();
  await page.getByRole('button', { name: 'Start Game' }).click();
  await page.getByText('check out this experiment in 360').click();
});