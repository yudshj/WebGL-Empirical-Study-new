import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.puzzlegame.com/One-Line-Draw');
  await page.getByRole('button', { name: 'Click To Play Now' }).click();
  await page.frameLocator('#game_frame').locator('#layaCanvas').click({
    position: {
      x: 285,
      y: 99
    }
  });
  await page.frameLocator('#game_frame').locator('#layaCanvas').click({
    position: {
      x: 172,
      y: 253
    }
  });
  await page.frameLocator('#game_frame').locator('#layaCanvas').click({
    position: {
      x: 75,
      y: 99
    }
  });
  await page.frameLocator('#game_frame').locator('#layaCanvas').click({
    position: {
      x: 232,
      y: 236
    }
  });
  await page.frameLocator('#game_frame').locator('#layaCanvas').click({
    position: {
      x: 290,
      y: 248
    }
  });
  await page.frameLocator('#game_frame').locator('#layaCanvas').click({
    position: {
      x: 305,
      y: 237
    }
  });
  await page.frameLocator('#game_frame').locator('#layaCanvas').click({
    position: {
      x: 171,
      y: 222
    }
  });
  await page.frameLocator('#game_frame').locator('#layaCanvas').click({
    position: {
      x: 199,
      y: 230
    }
  });
  await page.frameLocator('#game_frame').locator('body').press('ArrowRight');
  await page.frameLocator('#game_frame').locator('body').press('ArrowRight');
  await page.frameLocator('#game_frame').locator('body').press('ArrowRight');
  await page.frameLocator('#game_frame').locator('#layaCanvas').click({
    position: {
      x: 91,
      y: 232
    }
  });
  await page.frameLocator('#game_frame').locator('#layaCanvas').click({
    position: {
      x: 91,
      y: 232
    }
  });
  await page.frameLocator('#game_frame').locator('#layaCanvas').click({
    position: {
      x: 79,
      y: 433
    }
  });
  await page.frameLocator('#game_frame').frameLocator('iframe[name="aswift_1"]').getByRole('button', { name: 'Close ad' }).click();
});