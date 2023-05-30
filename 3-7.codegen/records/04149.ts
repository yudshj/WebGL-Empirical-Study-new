import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://1v1.school/');
  await page.locator('#gameContainer').click({
    position: {
      x: 766,
      y: 528
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 998,
      y: 563
    }
  });
  await page.goto('https://1v1.school/');
  await page.keyboard.press('w');
  await page.keyboard.press('a');
  await page.keyboard.press('s');
  await page.keyboard.press('d');
  await page.locator('#gameContainer').click({
    position: {
      x: 648,
      y: 404
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 648,
      y: 404
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 648,
      y: 404
    }
  });
});