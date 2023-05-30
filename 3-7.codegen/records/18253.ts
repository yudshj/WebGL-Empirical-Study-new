import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://watershednavigator.org/');
  await page.getByRole('link', { name: 'Map marker for chapter: “Learn About Water”' }).click();
  await page.getByRole('button', { name: 'Show next marker' }).click();
  await page.getByRole('button', { name: 'Show next marker' }).click();
  await page.getByRole('button', { name: 'Show next marker' }).click();
  await page.getByRole('button', { name: 'Show next marker' }).click();
});