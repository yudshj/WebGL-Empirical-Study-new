import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://kamra.invisi-dir.com/');
  await page.getByRole('button').nth(1).click();
  await page.getByRole('button').click();
  await page.getByRole('button').first().click();
  await page.getByRole('button').first().setInputFiles('1.jpg');
  await page.getByRole('button').first().click();
  await page.getByRole('button').nth(1).click();
  await page.getByRole('img').nth(3).click();
  await page.getByRole('button').first().click();
});