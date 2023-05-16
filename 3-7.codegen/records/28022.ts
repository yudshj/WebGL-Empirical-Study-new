import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.uptourism.gov.in/');
  await page.goto('https://www.uptourism.gov.in/en');
  await page.getByRole('button', { name: '×' }).click();
  await page.getByText('Enter').click();
});