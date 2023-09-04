import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://congres.puydufou.com/fr');
  await page.getByRole('button', { name: 'Agree and close: Agree to our data processing and close' }).click();
});