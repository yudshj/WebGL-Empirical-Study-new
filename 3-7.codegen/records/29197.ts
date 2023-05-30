import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://zonewars.io/');
  await page.locator('#gameContainer').click({
    position: {
      x: 853,
      y: 533
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 1079,
      y: 577
    }
  });
  await page.keyboard.press('f');
  await page.keyboard.press('1');
  await page.locator('#gameContainer').click({
    position: {
      x: 608,
      y: 345
    }
  });
  await page.keyboard.press('w', {delay: 1000});
  await page.mouse.move(100, 100);
  await page.locator('#gameContainer').click({
    position: {
      x: 608,
      y: 345
    }
  });

});