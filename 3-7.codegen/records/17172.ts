import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://topline.vividworks.com/VividWeb');
  await page.locator('#library-contents').getByRole('link', { name: 'Verona', exact: true }).click();
  await page.getByRole('link', { name: 'Verona', exact: true }).click();
  await page.getByRole('link', { name: ' Build customized combination' }).click();
  await page.getByRole('link', { name: 'A', exact: true }).click();
  await page.getByRole('link', { name: 'P2', exact: true }).click();
  await page.getByRole('link', { name: 'P26' }).click();
});