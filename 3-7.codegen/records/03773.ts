import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://stonewallforever.org/');
  await page.getByRole('button', { name: 'Enter the Monument' }).click();
});