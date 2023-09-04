import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.deepstatemap.live/');
  await page.goto('https://www.deepstatemap.live/#6/49.438/32.053');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'ЧИТАТИ' }).click();
  const page1 = await page1Promise;
});