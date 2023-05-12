import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.lahautesociete.com/');
  await page.goto('https://www.lahautesociete.com/en/');
  await page.getByRole('button', { name: 'Tout accepter' }).click();
});