import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.cartoonnetwork.pl/gry/ivandoe-bohaterska-wyprawa/graj');
  await page.getByRole('button', { name: 'Odmów' }).click();
  await page.frameLocator('iframe[title="Bohaterska wyprawa\\!"]').locator('#pixi-canvas').click({
    position: {
      x: 454,
      y: 454
    }
  });
  await page.frameLocator('iframe[title="Bohaterska wyprawa\\!"]').locator('#pixi-canvas').click({
    position: {
      x: 814,
      y: 502
    }
  });
  await page.frameLocator('iframe[title="Bohaterska wyprawa\\!"]').locator('#pixi-canvas').click({
    position: {
      x: 814,
      y: 502
    }
  });
  await page.frameLocator('iframe[title="Bohaterska wyprawa\\!"]').locator('#pixi-canvas').press('ArrowRight');
  await page.frameLocator('iframe[title="Bohaterska wyprawa\\!"]').locator('#pixi-canvas').press('ArrowRight');
  await page.keyboard.press('d');
  await page.keyboard.press('d');
  await page.keyboard.press('d');
  await page.keyboard.press('d');
  await page.keyboard.press('d');
  await page.keyboard.press('Space');
});