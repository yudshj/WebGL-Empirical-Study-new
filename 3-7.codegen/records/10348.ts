import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://iammaddog.ru/');
  await page.getByRole('link', { name: 'ENTER' }).click();
});