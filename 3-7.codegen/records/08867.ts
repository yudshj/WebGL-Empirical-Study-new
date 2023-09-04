import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://fivet.com/experience');
  await page.getByRole('link', { name: 'Back to homepage' }).click();
  await page.goto('https://fivet.com/');
});