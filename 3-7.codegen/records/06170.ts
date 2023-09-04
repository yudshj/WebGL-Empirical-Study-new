import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://builder.modpools.com/');
  await page.getByText('United States').click();
  await page.getByRole('button', { name: 'Continue' }).click();
});