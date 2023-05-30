import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://bryantcodes.art/');
  await page.locator('canvas').click({
    position: {
      x: 676,
      y: 307
    }
  });
  await page.getByRole('button', { name: 'BACK_TO_MENU' }).click();
  await page.locator('canvas').click({
    position: {
      x: 940,
      y: 500
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 599,
      y: 524
    }
  });
  await page.getByRole('button', { name: 'close project' }).click();
  await page.locator('canvas').click({
    position: {
      x: 643,
      y: 175
    }
  });
  await page.getByRole('button', { name: 'close project' }).click();
  await page.locator('canvas').click({
    position: {
      x: 734,
      y: 458
    }
  });
  await page.getByRole('button', { name: 'close project' }).click();
  await page.locator('canvas').click({
    position: {
      x: 522,
      y: 54
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1030,
      y: 274
    }
  });
});