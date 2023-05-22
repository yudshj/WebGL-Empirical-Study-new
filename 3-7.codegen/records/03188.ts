import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.lovelettersfromcraig.org/');
  await page.getByRole('link', { name: 'enter' }).click();
  await page.locator('canvas').click({
    position: {
      x: 926,
      y: 555
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 645,
      y: 348
    }
  });
});