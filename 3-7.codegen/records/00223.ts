import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.avec-rennes.com/');
  await page.locator('div').filter({ hasText: 'À VENDRE - ROYAL ENFIELD INTERCEPTOR ROYAL ENFIELD 2019 650cm3 À VENDRE - YAMAHA' }).nth(1).click();
  await page.locator('#atelier').getByRole('button', { name: 'Next' }).click();
  await page.locator('#atelier').getByRole('button', { name: 'Next' }).click();
});