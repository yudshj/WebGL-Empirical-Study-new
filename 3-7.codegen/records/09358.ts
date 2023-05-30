import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://get-it-done.gettagaming.com/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('canvas').click({
    position: {
      x: 1169,
      y: 598
    }
  });
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('canvas').click({
    position: {
      x: 330,
      y: 216
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 375,
      y: 231
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1145,
      y: 341
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1145,
      y: 341
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1198,
      y: 382
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1194,
      y: 368
    }
  });
});