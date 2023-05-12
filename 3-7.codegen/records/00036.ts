import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://3d.artreal.ru/');
  await page.locator('canvas').click({
    position: {
      x: 574,
      y: 383
    }
  });
});