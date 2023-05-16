import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://socketshot.io/');
  await page.getByRole('button', { name: 'Play Now!' }).click();
});