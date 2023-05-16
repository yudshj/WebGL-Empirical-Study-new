import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://combis.hr/virtual-city/en/');
  await page.getByRole('link', { name: 'Let\'s see together' }).click();
});