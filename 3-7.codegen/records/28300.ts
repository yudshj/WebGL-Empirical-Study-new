import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.vitamincornwall.com/sproutbreakout/');
  await page.getByRole('link', { name: 'Start' }).click();
});