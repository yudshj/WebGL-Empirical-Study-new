import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsexperiments.withgoogle.com/medusae/');
  await page.getByText('START', { exact: true }).click();
});