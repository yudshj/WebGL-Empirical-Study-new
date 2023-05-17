import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://logartis.info/');
  await page.getByRole('button', { name: 'Explore', exact: true }).click();
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.locator('canvas').click({
    position: {
      x: 643,
      y: 672
    }
  });
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);

  await page.locator('canvas').click({
    position: {
      x: 635,
      y: 664
    }
  });
});