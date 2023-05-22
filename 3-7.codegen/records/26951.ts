import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.sonderconsultants.com/');
  await page.getByRole('link', { name: 'Explore' }).click();
});