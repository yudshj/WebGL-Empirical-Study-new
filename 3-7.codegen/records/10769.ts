import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.cartoonnetworkme.com/games/ivandoe-quest-on/play');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.frameLocator('iframe[title="Quest On\\!"]').locator('#pixi-canvas').click({
    position: {
      x: 455,
      y: 450
    }
  });
});