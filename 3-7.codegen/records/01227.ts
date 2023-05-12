import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://lookbook-jogging-decathlon.com/en/');
  await page.getByRole('link').nth(3).click();
  await page.getByRole('link', { name: 'men' }).click();
});