import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://zikumanage.co.jp/');
  await page.locator('#background canvas').click({
    position: {
      x: 277,
      y: 332
    }
  });
  await page.locator('#background canvas').click({
    position: {
      x: 401,
      y: 369
    }
  });
  await page.locator('#background canvas').click({
    position: {
      x: 274,
      y: 316
    }
  });
  await page.locator('#background canvas').click({
    position: {
      x: 378,
      y: 323
    }
  });
  await page.locator('#background canvas').click({
    position: {
      x: 192,
      y: 418
    }
  });
  await page.locator('#background canvas').click({
    position: {
      x: 349,
      y: 258
    }
  });
  await page.locator('#background canvas').click({
    position: {
      x: 201,
      y: 285
    }
  });
  await page.locator('#background canvas').click({
    position: {
      x: 208,
      y: 244
    }
  });
});