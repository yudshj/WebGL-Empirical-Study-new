import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.floorplan.messefrankfurtusa.com/');
  await page.goto('http://www.floorplan.messefrankfurtusa.com/exfx.html');
  await page.getByRole('button', { name: '3D Press me to toggle 3D!' }).click();
  await page.locator('#fpContainer canvas').click({
    position: {
      x: 616,
      y: 355
    }
  });
  await page.getByRole('button', { name: 'X' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click({
    clickCount: 4
  });
  await page.getByRole('button', { name: '' }).click({
    clickCount: 5
  });
  await page.locator('#fpContainer canvas').click({
    position: {
      x: 616,
      y: 246
    }
  });
});