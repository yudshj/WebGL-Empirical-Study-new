import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://github.com/cjbayron/audiate');

  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'cjbayron.github.io/audiate/' }).click();
  const page2 = await page2Promise;
  await page2.getByRole('button', { name: 'START' }).click();
  await page2.getByRole('button', { name: 'START' }).click();
  await page2.getByRole('button', { name: 'START' }).click();
});