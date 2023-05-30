import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://explore.monticello.yourcultureconnect.com/');
  await page.getByRole('button', { name: 'Enter' }).getByRole('button', { name: 'Enter', exact: true }).filter({ hasText: 'Enter' }).click();
  await page.getByRole('button', { name: 'Interactive Map' }).click();
  await page.locator('#polygon-22582a20-5830-4b2b-bc46-e71760cea47e').click();
  await page.locator('#g-0447f927-3250-49b6-843a-25ac20b613a4 > .image-point').click();
  await page.getByRole('button', { name: 'Return to main page' }).click();
});