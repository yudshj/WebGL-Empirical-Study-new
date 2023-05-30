import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://fazetaproducciones.com/');
  await page.goto('http://fazetaproducciones.com/en');
  await page.getByRole('link', { name: 'Enter' }).click();
  await page.locator('figure:nth-child(5)').click();
  await page.locator('figure:nth-child(9)').click();
  await page.locator('figure:nth-child(12)').click();
});