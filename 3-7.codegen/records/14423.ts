import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://playground.babylonjs.com/');
  await page.locator('#renderCanvas').click({
    position: {
      x: 370,
      y: 288
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 64,
      y: 319
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 616,
      y: 312
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 427,
      y: 272
    }
  });
  await page.locator('#renderCanvas').dblclick({
    position: {
      x: 427,
      y: 271
    }
  });
  await page.getByTitle('Run\nAlt+Enter').getByRole('img').click();
  await page.getByTitle('Run\nAlt+Enter').getByRole('img').click();
});