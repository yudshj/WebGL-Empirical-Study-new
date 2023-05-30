import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.santinicycling.com/tour-de-france/');
  await page.goto('https://www.santinicycling.com/tour-de-france/en/');
  await page.getByRole('button', { name: 'Enable Cookies Enable Cookies Enable Cookies' }).click();
  await page.getByRole('button', { name: 'Design' }).click();
  await page.getByRole('button', { name: 'next' }).click();
  await page.getByRole('button', { name: 'next' }).click();
});