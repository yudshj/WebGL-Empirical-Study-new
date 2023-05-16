import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://canarywharfmap.com/');
  await page.getByRole('button', { name: 'Accept all' }).click();
});