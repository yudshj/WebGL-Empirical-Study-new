import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.shelterafrique.org/en/home');
  await page.locator('section').filter({ hasText: 'Chistmas slider WelcomeOur work has a direct and positive impact on the lives of' }).getByRole('button', { name: 'Next slide' }).click();
  await page.locator('section').filter({ hasText: 'Chistmas slider' }).getByRole('button', { name: 'Next slide' }).click();

});