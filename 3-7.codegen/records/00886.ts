import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://gowhere.com.br/');
  await page.locator('#news_vida-e-estilo').getByRole('link', { name: 'next slide' }).click();
  await page.locator('#news_gastronomia').getByRole('link', { name: 'next slide' }).click();
  await page.locator('#news_gastronomia').getByRole('link', { name: 'next slide' }).click();
  await page.locator('#news_gastronomia').getByRole('link', { name: 'previous slide' }).click();
});