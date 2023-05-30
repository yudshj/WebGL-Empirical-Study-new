import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://repscareunited.com/');
  await page.getByRole('link', { name: 'Get Started' }).click();
  await page.getByRole('link', { name: 'Get Started' }).click();
});