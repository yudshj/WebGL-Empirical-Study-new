import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://nemesiservice.com/covid-19');
  const page1Promise = page.waitForEvent('popup');
  await page.frameLocator('iframe[name="iframe"]').getByRole('button', { name: 'OK' }).click();
  const page1 = await page1Promise;
});