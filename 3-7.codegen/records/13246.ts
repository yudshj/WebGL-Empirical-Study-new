import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://neal.fun/design-the-next-iphone/');
  await page.getByRole('button', { name: 'Present' }).click();
});