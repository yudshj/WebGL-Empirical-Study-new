import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.jimmynelson.com/');
  await page.getByRole('button', { name: 's t a r t y o u r j o u r n e y' }).click();
});