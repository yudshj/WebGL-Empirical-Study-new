import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.maper-rpg.com/editeur.php?load=x');
  await page.locator('#modal-load').getByRole('img').nth(2).click();
  await page.locator('canvas').click({
    position: {
      x: 877,
      y: 507
    }
  });
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});