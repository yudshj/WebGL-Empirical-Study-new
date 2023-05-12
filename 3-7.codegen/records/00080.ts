import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://academy.mercdev.com/');
  await page.getByText('Start the journey').click();
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
});