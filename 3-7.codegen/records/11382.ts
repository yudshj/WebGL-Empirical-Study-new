import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://krestadesign.com/');
  await page.getByText('Yes').click();
  await page.getByRole('main').locator('svg').click();
  await page.getByRole('button', { name: 'dismiss cookie message' }).click();
  await page.getByText('Enter').click();
  await page.locator('#canvas-container img').nth(1).click();
  await page.locator('#canvas-container img').nth(1).click();
  await page.locator('#canvas-container img').nth(1).click();
  await page.locator('#canvas-container img').nth(1).click();
  await page.locator('#canvas-container img').nth(1).click();
});