import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://sharethehappiness.tv/');
  await page.getByRole('link', { name: 'HD (best for fast connections)' }).click();
});