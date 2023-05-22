import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://geoportal3d.pl/');
  await page.locator('canvas').first().click({
    position: {
      x: 572,
      y: 333
    }
  });
  await page.locator('#animation_pathPlay').click();
  await page.locator('#animation_pathPointer').click();
  await page.locator('#animation_pathPointer').click();
  await page.locator('#animation_pathPointer').click();
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);

});