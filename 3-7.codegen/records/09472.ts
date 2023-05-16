import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://github.com/cloud-annotations/object-tracking-js');
  await page.getByRole('link', { name: 'Edit cranky-keller-cp4ms' }).click();
});