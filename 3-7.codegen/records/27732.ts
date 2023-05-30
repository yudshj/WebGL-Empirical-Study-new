import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.topologicalquantumchemistry.com/');
  await page.goto('https://www.topologicalquantumchemistry.com/#/');
  await page.getByRole('listitem').filter({ hasText: /^Co$/ }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByText('Zn').click();
});