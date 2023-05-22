import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://silver-gold.stp-russia.ru/');
  await page.getByRole('button', { name: 'Начать' }).click();
  await page.getByRole('link', { name: 'scroll' }).click();
  await page.getByRole('main').locator('svg').nth(2).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
});