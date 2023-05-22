import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://le16com.com/');
  await page.locator('.lqd-iot-img-inner').click();
  await page.getByText('com').click();
  await page.getByRole('button', { name: 'Menu' }).click();
  await page.getByRole('link', { name: 'L’agence' }).click();
  await page.getByRole('link', { name: 'le16com' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.locator('div:nth-child(7) > .fr-close-icon').click();
  await page.getByRole('button', { name: 'Menu' }).click();
  await page.getByRole('link', { name: 'Réalisations' }).click();
});