import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.3dmakeitreal.com/welcome');
  await page.locator('canvas').click({
    position: {
      x: 499,
      y: 322
    }
  });
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.getByRole('link', { name: '3dRotationLogo Try it for FREE!' }).click();
  await page.locator('canvas').click({
    position: {
      x: 625,
      y: 136
    }
  });
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);

});