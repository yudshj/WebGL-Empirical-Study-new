import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://rezaid.co.uk/');
  await page.getByRole('link', { name: '' }).click();
  await page.locator('canvas').first().click({
    position: {
      x: 148,
      y: 145
    }
  });
  await page.locator('canvas').nth(1).click({
    position: {
      x: 169,
      y: 188
    }
  });
  await page.locator('canvas').nth(2).click({
    position: {
      x: 211,
      y: 176
    }
  });
  await page.locator('canvas').nth(2).click({
    position: {
      x: 151,
      y: 176
    }
  });
});