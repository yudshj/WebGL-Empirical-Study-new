import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.omnicommander.com/');
  await page.locator('#squeezeBtnHero').getByRole('link', { name: 'Contact us for more information' }).click();
});