import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://1v1.lol./');
  await page.getByRole('button', { name: 'Got It' }).click();
  await page.locator('#gameContainer').click({
    position: {
      x: 824,
      y: 551
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 1066,
      y: 631
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 848,
      y: 625
    }
  });
  await page.locator('#gameContainer').click({
    position: {
      x: 848,
      y: 625
    }
  });
  await page.locator('#gameContainer').click({
    clickCount: 4,
    position: {
      x: 848,
      y: 625
    }
  });
  await page.keyboard.press('z');
  await page.locator('#gameContainer').click({
    position: {
      x: 848,
      y: 625
    }
  });
  await page.keyboard.press('f');
  await page.mouse.move(100, 100);
  await page.locator('#gameContainer').click({
    position: {
      x: 848,
      y: 625
    }
  });
});