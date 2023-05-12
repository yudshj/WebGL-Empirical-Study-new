import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://aventar.wtf/');
  await page.getByRole('button', { name: 'ENTRER' }).click();
  await page.locator('#renderCanvas').click({
    position: {
      x: 637,
      y: 355
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 300,
      y: 116
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 437,
      y: 223
    }
  });
});