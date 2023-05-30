import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.deepvenn.com/');
  await page.locator('#a_c').selectOption('#00FF00');
  await page.locator('#a_title').click();
  await page.getByRole('button', { name: 'Draw as PNG' }).click();
  await page.locator('#title').click();
  await page.locator('#output1').click();
  await page.getByRole('link', { name: 'Example 1' }).click();
  await page.getByRole('link', { name: 'Example 2' }).click();
  await page.getByRole('link', { name: 'Example 3' }).click();
  await page.getByRole('link', { name: 'Example 4' }).click();
});