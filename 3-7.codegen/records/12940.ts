import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://morterra.com/');
  await page.getByRole('button', { name: 'Play Now' }).click();
  await page.getByRole('link', { name: 'Skip Tutorial' }).click();
  await page.locator('#renderCanvas').click({
    position: {
      x: 627,
      y: 392
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 627,
      y: 392
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 627,
      y: 392
    }
  });
  await page.keyboard.press('KeyW');
  await page.keyboard.press('KeyW');
  await page.keyboard.press('KeyW');
  await page.keyboard.press('KeyW');
  await page.mouse.move(0, 0);
  await page.mouse.move(0, 0);
});