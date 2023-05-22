import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://unseen-music.com/yume/');
  await page.locator('#cnvs').click({
    position: {
      x: 635,
      y: 415
    }
  });
  await page.locator('#cnvs').click({
    position: {
      x: 641,
      y: 426
    }
  });
  await page.locator('#cnvs').click({
    position: {
      x: 721,
      y: 253
    }
  });
  await page.locator('#cnvs').click({
    position: {
      x: 434,
      y: 171
    }
  });
  await page.locator('#cnvs').click({
    position: {
      x: 898,
      y: 349
    }
  });
});