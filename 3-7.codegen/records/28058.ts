import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.uttopion.com/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.locator('#unity-canvas').click({
    position: {
      x: 622,
      y: 662
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 600,
      y: 577
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 612,
      y: 482
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 659,
      y: 467
    }
  });
});