import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://kemono.pet/');
  await page.getByRole('button', { name: 'click to enter' }).click();
});