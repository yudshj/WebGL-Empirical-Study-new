import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://di-museum.ch/');
  await page.getByText('502 Bad Gateway nginx/1.18.0 (Ubuntu)').click();
  await page.goto('https://di-museum.ch/');
});