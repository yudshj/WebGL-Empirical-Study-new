import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://interactivemap.mylakeviewvillage.com/');
  await page.getByRole('link', { name: 'Explore now' }).click();
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.locator('#map-canvas').click({
    position: {
      x: 594,
      y: 338
    }
  });
  await page.locator('#vr-canvas').click({
    position: {
      x: 920,
      y: 356
    }
  });
  await page.locator('#vr-canvas').click({
    position: {
      x: 828,
      y: 342
    }
  });
  await page.getByRole('link', { name: 'Next Streetview' }).click();
  await page.locator('#vr-canvas').click({
    position: {
      x: 797,
      y: 414
    }
  });
});