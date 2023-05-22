import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://trek.nasa.gov/');
  await page.goto('https://trek.nasa.gov/#');
  await page.getByText('EXPLORE TREKS').nth(1).click();
  await page.locator('#treksSelect').getByText('Titan').click();
});