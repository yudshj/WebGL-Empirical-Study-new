import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://cemprom.rs/');
  await page.getByRole('link', { name: 'н а ш е у с л у г е' }).click();
});