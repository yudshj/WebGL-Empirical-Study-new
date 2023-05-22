import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://lithophanemaker.com/Lithophanes.html');
  await page.locator('#fileToUpload').click();
  await page.locator('#fileToUpload').setInputFiles('1.jpg');
  await page.locator('#contrast_level_form').getByRole('spinbutton').click();
  await page.locator('#contrast_level_form').getByRole('spinbutton').dblclick();
  await page.locator('#contrast_level_form').getByRole('spinbutton').fill('0.6');
  await page.locator('#brightness_level_form').getByRole('spinbutton').click();
  await page.locator('#brightness_level_form').getByRole('spinbutton').fill('0.8');
});