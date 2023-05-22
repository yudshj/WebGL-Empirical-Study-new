import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://girmit.world/');
  await page.getByRole('link', { name: 'Experience Girmit' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Open Mozilla Hub' }).click();
  const page1 = await page1Promise;
});