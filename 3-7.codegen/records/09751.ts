import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://guccisurf.gucci.com/');
  await page.getByText('Play').click();
  await page.getByText('Skip').click();
  await page.getByText('Play').click();
});