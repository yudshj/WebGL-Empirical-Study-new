import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://astronft.everdome.io/');
  await page.getByRole('button', { name: 'scroll down' }).click();
});