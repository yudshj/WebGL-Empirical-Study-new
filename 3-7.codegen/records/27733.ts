import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.topologicalquantumchemistry.org/');
  await page.goto('https://www.topologicalquantumchemistry.org/#/');
  await page.getByText('C', { exact: true }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('row', { name: 'C1 36 (Cmc21) LCEBR' }).getByRole('link', { name: 'LCEBR' }).click();
});