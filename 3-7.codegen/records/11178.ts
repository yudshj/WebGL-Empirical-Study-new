import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://khaby.iconmagazine.de/');
  await page.getByRole('button', { name: 'Start Experience' }).click();
});