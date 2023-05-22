import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://justaim.lol/');
  await page.locator('#gameContainer').click({
    position: {
      x: 798,
      y: 547
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 1086,
      y: 577
    }
  });
  await page.keyboard.press('f');
  await page.locator('#gameContainer').click({
    position: {
      x: 871,
      y: 304
    }
  });
  await page.mouse.move(100,100);
  await page.locator('#gameContainer').click({
    clickCount: 4,
    position: {
      x: 871,
      y: 304
    }
  });
  await page.keyboard.press('1');
  await page.keyboard.press('w');
  await page.keyboard.press('w');
  await page.keyboard.press('w');
  await page.keyboard.press('w');
  await page.locator('#gameContainer').click({
    position: {
      x: 871,
      y: 304
    }
  });
  await page.keyboard.press('2');
  await page.keyboard.press('w');
  await page.keyboard.press('w');
  await page.keyboard.press('w');
  await page.locator('#gameContainer').click({
    position: {
      x: 871,
      y: 304
    }
  });
});