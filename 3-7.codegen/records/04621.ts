import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://aim.lol/');
  await page.locator('#gameContainer').click({
    position: {
      x: 844,
      y: 551
    }
  });
  await page.getByRole('button', { name: 'Got It' }).click();
  await page.locator('#gameContainer').click({
    position: {
      x: 1022,
      y: 638
    }
  });
  await page.locator('body').press('w');
  await page.locator('body').press('d');
  await page.locator('body').press('f');
  await page.locator('#gameContainer').click({
    position: {
      x: 473,
      y: 701
    }
  });
  await page.mouse.move(100, 100);
});