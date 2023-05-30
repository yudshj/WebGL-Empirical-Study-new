import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://guccibelovedbounce.gucci.com/');
  await page.getByRole('button', { name: 'Play the game' }).click();
  await page.locator('#stage canvas').click({
    position: {
      x: 709,
      y: 378
    }
  });
  await page.locator('#stage canvas').click({
    position: {
      x: 678,
      y: 408
    }
  });
  await page.locator('#stage canvas').click({
    position: {
      x: 678,
      y: 408
    }
  });
  await page.locator('#stage canvas').click({
    position: {
      x: 678,
      y: 408
    }
  });
});