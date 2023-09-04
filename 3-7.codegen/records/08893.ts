import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://floki.com/');
  await page.locator('#ecosystem').getByRole('button', { name: 'Go to slide 1' }).click();
  await page.locator('#ecosystem').getByRole('button', { name: 'Go to slide 2' }).click();
  await page.locator('#ecosystem').getByRole('button', { name: 'Go to slide 3' }).click();
  await page.locator('#ecosystem').getByRole('button', { name: 'Go to slide 4' }).click();
  await page.locator('#community').getByRole('button', { name: 'Go to slide 2' }).click();
  await page.locator('#community').getByRole('button', { name: 'Go to slide 3' }).click();
  await page.locator('#community').getByRole('button', { name: 'Go to slide 4' }).click();
});