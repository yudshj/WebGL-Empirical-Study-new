import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://play.gotslotscasino.zynga.com/');
  await page.frameLocator('iframe[name="game_container"]').locator('canvas').click({
    position: {
      x: 596,
      y: 270
    }
  });
  await page.frameLocator('iframe[name="game_container"]').locator('canvas').click({
    position: {
      x: 623,
      y: 207
    }
  });
  await page.frameLocator('iframe[name="game_container"]').locator('body').press('NumLock');
  await page.frameLocator('iframe[name="game_container"]').locator('body').press('Enter');
  await page.frameLocator('iframe[name="game_container"]').locator('canvas').click({
    position: {
      x: 752,
      y: 202
    }
  });
  await page.frameLocator('iframe[name="game_container"]').locator('canvas').click({
    clickCount: 4,
    position: {
      x: 795,
      y: 188
    }
  });
  await page.frameLocator('iframe[name="game_container"]').locator('canvas').click({
    position: {
      x: 616,
      y: 187
    }
  });
  await page.frameLocator('iframe[name="game_container"]').locator('canvas').click({
    position: {
      x: 719,
      y: 195
    }
  });
  await page.frameLocator('iframe[name="game_container"]').locator('canvas').click({
    position: {
      x: 535,
      y: 515
    }
  });
  await page.frameLocator('iframe[name="game_container"]').locator('canvas').click({
    position: {
      x: 1076,
      y: 46
    }
  });
  await page.frameLocator('iframe[name="game_container"]').locator('canvas').click({
    position: {
      x: 695,
      y: 366
    }
  });
  await page.frameLocator('iframe[name="game_container"]').locator('canvas').click({
    position: {
      x: 909,
      y: 124
    }
  });
  await page.frameLocator('iframe[name="game_container"]').locator('canvas').click({
    position: {
      x: 415,
      y: 380
    }
  });
  await page.frameLocator('iframe[name="game_container"]').locator('canvas').click({
    position: {
      x: 1038,
      y: 604
    }
  });
  await page.frameLocator('iframe[name="game_container"]').locator('canvas').click({
    position: {
      x: 1027,
      y: 576
    }
  });
  await page.frameLocator('iframe[name="game_container"]').locator('canvas').click({
    position: {
      x: 1019,
      y: 582
    }
  });
  await page.frameLocator('iframe[name="game_container"]').locator('canvas').click({
    position: {
      x: 1027,
      y: 604
    }
  });
  await page.frameLocator('iframe[name="game_container"]').locator('canvas').click({
    position: {
      x: 1027,
      y: 604
    }
  });
});