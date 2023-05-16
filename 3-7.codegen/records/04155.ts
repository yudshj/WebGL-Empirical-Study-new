import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://2016.kikk.be/');
  await page.getByRole('spinbutton').fill('111.0');
});