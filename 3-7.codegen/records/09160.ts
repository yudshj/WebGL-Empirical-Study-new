import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://gakko.io/');
  await page.getByRole('button', { name: '>>>press to activate<<<' }).click();
  await page.goto('https://gakko.io/');
  await page.getByRole('button', { name: '>>>press to activate<<<' }).click();
});