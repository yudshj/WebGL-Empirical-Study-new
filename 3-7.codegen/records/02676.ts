import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.dildo-generator.com/');

  await page.locator('#preview_controls').getByRole('button', { name: '+' }).dblclick();
  await page.locator('#preview_controls').getByRole('button', { name: '+' }).click();

});