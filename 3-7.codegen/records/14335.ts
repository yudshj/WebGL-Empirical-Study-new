import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://pixi3d.org/');
  await page.getByRole('link', { name: 'Desert racing' }).click();
  await page.locator('#demo').click({
    position: {
      x: 657,
      y: 540
    }
  });
  await page.locator('#demo').click({
    position: {
      x: 803,
      y: 320
    }
  });
  await page.keyboard.press('w', { delay: 4000 });
});