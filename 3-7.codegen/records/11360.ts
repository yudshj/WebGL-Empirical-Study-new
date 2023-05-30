import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://kr.marscompany.co/');
  await page.goto('https://home.marscompany.co/');
  await page.goto('https://marslabs.co/');
  await page.getByRole('link', { name: 'STAKE MRST' }).click();
});