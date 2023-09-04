import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.transportesnovaera.com.br/');
  await page.locator('#blog-carrousel').getByRole('listitem').first().click();
});