import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://gamezgid.ru/sportivnye-golovy-vse-chempionaty-po-futbolu/');
  await page.frameLocator('#game_embed iframe').locator('canvas').click({
    position: {
      x: 478,
      y: 238
    }
  });
  await page.frameLocator('#game_embed iframe').locator('canvas').click({
    position: {
      x: 768,
      y: 394
    }
  });
});