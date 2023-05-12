import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://petanium.ru/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'ИГРАТЬ' }).click();
  const page1 = await page1Promise;
});