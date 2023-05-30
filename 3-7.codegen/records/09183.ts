import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://game.ahrimanplay.com/proto/otoha/#/mtest/jgoqubxpvo3cte');
  await page.locator('#GameCanvas').click({
    position: {
      x: 132,
      y: 106
    }
  });
  await page.locator('#GameCanvas').click({
    position: {
      x: 510,
      y: 232
    }
  });
  await page.locator('#GameCanvas').click({
    position: {
      x: 44,
      y: 164
    }
  });
});