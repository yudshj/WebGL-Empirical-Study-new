import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.graffitigeneral.com/');
  await page.getByRole('link', { name: 'Skip intro' }).click();
  await page.getByRole('link', { name: 'HD' }).click();
  await page.locator('.menu_darker').click();
  await page.locator('canvas').nth(4).click({
    position: {
      x: 558,
      y: 329
    }
  });
  await page.locator('.open_menu_btn').click();
  await page.locator('.menu_darker').click();
  await page.locator('canvas').nth(4).click({
    position: {
      x: 837,
      y: 378
    }
  });
  await page.locator('canvas').nth(4).click({
    position: {
      x: 795,
      y: 343
    }
  });
  await page.locator('canvas').nth(4).click({
    position: {
      x: 451,
      y: 342
    }
  });
  await page.locator('.open_menu_btn').click();
  await page.getByRole('link', { name: 'Explore' }).click();
  await page.getByRole('link', { name: 'Explore' }).click();
  await page.getByRole('link', { name: 'Map' }).click();
  await page.locator('div:nth-child(6) > .map_ct').click();
  await page.getByRole('link', { name: 'Go there' }).click();
});