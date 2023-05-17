import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://academy.mercdev.com/');
  await page.getByText('Start the journey').click();
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});