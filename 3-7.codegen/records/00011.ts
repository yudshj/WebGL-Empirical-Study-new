import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://12storytellers.hands.agency/');
  await page.getByRole('button', { name: 'Let\'s play' }).click();
  await page.locator('.joker').first().click();
  await page.locator('.joker-container > div:nth-child(3)').click();
});