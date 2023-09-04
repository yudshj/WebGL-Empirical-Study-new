import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://mdnggps.org/');
  await page.getByTitle('Zoom in').getByRole('img').click();
  await page.getByTitle('Zoom out').getByRole('img').click();
});