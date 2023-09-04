import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://365ayearof.cartier.com/2021');
  await page.getByRole('button', { name: 'ENTER' }).click();
});