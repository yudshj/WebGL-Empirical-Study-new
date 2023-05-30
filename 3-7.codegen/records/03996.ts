import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.wynyard-quarter.co.nz/wqsmart/');
  await page.getByRole('link', { name: 'Explore and discover Wynyard Quarter Smart }}}' }).click();
  await page.getByRole('link', { name: 'Keep exploring { { {' }).click();
  await page.getByText('▶ Resource Efficiency ▶ Economic Vitality ▶ Transport, Movement & Connectivity ▶').click();
  await page.getByRole('link', { name: 'Continue } } }' }).click();
  await page.getByRole('link', { name: 'What success looks like }}}' }).click();
  await page.getByRole('link', { name: 'Transport, Movement & Connectivity }}}' }).click();
  await page.getByRole('link', { name: 'Continue } } }' }).click();
});