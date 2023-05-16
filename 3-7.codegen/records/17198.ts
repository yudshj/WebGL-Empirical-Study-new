import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://tote.design/cure/');
  await page.getByRole('link', { name: '100 ENTER' }).click();
});