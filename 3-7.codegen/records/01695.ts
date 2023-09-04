import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://prospekte-kataloge.stabilo-fachmarkt.de/');
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
});