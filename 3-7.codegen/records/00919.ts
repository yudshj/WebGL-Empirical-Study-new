import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://hands.wtf/');
  await page.locator('canvas').nth(1).click({
    position: {
      x: 451,
      y: 447
    }
  });
  await page.locator('#inputField').fill('aaa');
  await page.locator('div').filter({ hasText: 'type a 3 letter word stinkdigital' }).locator('div').nth(2).click();
  await page.getByRole('img').click();
});