import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://racegame.io/');
  await page.getByPlaceholder('SET_YOUR_NICKNAME').click();
  await page.locator('#Nickname').fill('123');
  await page.getByRole('button', { name: '⏵' }).click();
  await page.locator('#leftBox').getByRole('button', { name: '⏴' }).click();
  await page.locator('#Nickname').press('Enter');
});