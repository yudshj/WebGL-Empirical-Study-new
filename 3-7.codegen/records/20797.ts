import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.deere.co.th/th/');
  await page.getByRole('spinbutton').fill('111.0');
});