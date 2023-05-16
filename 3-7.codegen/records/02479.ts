import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://experiments.withgoogle.com/collection/chrome');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'WEBGL GLOBE COLLECTION' }).click();
  const page1 = await page1Promise;
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: 'Instagram Followers by Jules Moretti' }).click();
  const page2 = await page2Promise;
});