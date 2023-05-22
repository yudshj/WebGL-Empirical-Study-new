import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.vam.ac.uk/designaring/');
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.locator('#Scene div').nth(2).click();
  await page.getByRole('link', { name: 'Ring Style' }).click();
  await page.getByRole('link', { name: 'Silver' }).click();
  await page.getByRole('link', { name: 'Matt' }).click();
  await page.locator('#Scene div').nth(2).click();
  await page.getByRole('link', { name: 'Enamels' }).click();
  await page.getByRole('link', { name: 'Single' }).click();
  await page.locator('div:nth-child(29)').click();
  await page.getByRole('link').nth(1).click();
  await page.getByRole('link', { name: 'Add Motif' }).click();
  await page.locator('.MenuClose').click();
  await page.getByRole('link', { name: 'Add Gem' }).click();
  await page.getByRole('link', { name: 'Change Gemstone' }).click();
  await page.getByRole('link', { name: 'Emerald' }).click();
  await page.locator('div').filter({ hasText: /^Back$/ }).getByRole('link').nth(1).click();
});