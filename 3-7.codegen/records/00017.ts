import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://1v1.lol/');
  await page.locator('#gameContainer').click({
    position: {
      x: 693,
      y: 528
    }
  });
  await page.getByRole('button', { name: 'Got It' }).click();
  await page.locator('#gameContainer').click({
    position: {
      x: 1057,
      y: 616
    }
  });
});