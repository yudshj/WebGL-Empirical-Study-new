import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://github.com/infinitered/nsfwjs');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'nsfwjs.com/', exact: true }).click();
  const page1 = await page1Promise;
  await page1.getByRole('img', { name: 'drop your file here' }).click();
  await page1.locator('body').setInputFiles('1.jpg');
});