import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://avyconaivo.com/');
  await page.getByRole('button', { name: 'Next' }).first().click();
  await page.getByRole('button', { name: 'Next' }).first().click();
  await page.locator('section').filter({ hasText: 'Featured Products Check out some of our most popular products. Previous AVM-JB-D' }).getByRole('button', { name: 'Next' }).click();
});