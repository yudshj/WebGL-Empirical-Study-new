import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.bluemarinefoundation.com/the-sea-we-breathe/');
  await page.getByRole('button', { name: 'Let\'s Begin' }).click();
});