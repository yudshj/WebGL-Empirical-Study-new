import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://kkcemdhanbad.ac.in/');
  await page.getByText('CLOSE').click();
  await page.getByRole('link', { name: '2', exact: true }).click();
  await page.getByRole('link', { name: ' Next' }).click();
});