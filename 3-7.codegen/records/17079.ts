import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://tictacwow.caffeine.lt/en/');
  await page.getByRole('button', { name: 'PLAY AGAINST COMPUTER' }).click();
  await page.getByRole('button', { name: 'BEGIN' }).click();
});