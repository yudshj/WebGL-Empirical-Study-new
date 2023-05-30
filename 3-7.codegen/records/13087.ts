import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://mwdchang.github.io/tfjs-gan/');
  await page.getByRole('button', { name: 'Train' }).click();
});