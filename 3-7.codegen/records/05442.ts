import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://avozdemarielle.com/');
  await page.getByRole('button', { name: 'The Project The Project' }).click();
  await page.getByRole('button', { name: 'How to use How to use' }).click();
  await page.locator('.flickity-enabled').click();
  await page.locator('#fullpage').getByRole('button').nth(3).click();
  await page.getByRole('button', { name: 'Help to Share Help to Share' }).click();
  await page.getByRole('button', { name: 'The Project The Project' }).click();
});