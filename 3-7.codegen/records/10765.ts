import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.cartoonnetwork.fr/jeux/ivandoe-la-quete-continue/jouer');
  await page.getByRole('button', { name: 'Accepter' }).click();
  await page.frameLocator('iframe[title="La quête continue \\!"]').locator('#pixi-canvas').click({
    position: {
      x: 464,
      y: 453
    }
  });
  await page.frameLocator('iframe[title="La quête continue \\!"]').locator('#pixi-canvas').click({
    position: {
      x: 306,
      y: 325
    }
  });
  await page.frameLocator('iframe[title="La quête continue \\!"]').locator('#pixi-canvas').press('ArrowRight');
  await page.frameLocator('iframe[title="La quête continue \\!"]').locator('#pixi-canvas').press('ArrowRight');
  await page.frameLocator('iframe[title="La quête continue \\!"]').locator('#pixi-canvas').press('ArrowDown');
  await page.frameLocator('iframe[title="La quête continue \\!"]').locator('#pixi-canvas').press('ArrowUp');
  await page.frameLocator('iframe[title="La quête continue \\!"]').locator('#pixi-canvas').press('ArrowLeft');
  await page.frameLocator('iframe[title="La quête continue \\!"]').locator('#pixi-canvas').click({
    position: {
      x: 548,
      y: 165
    }
  });
  await page.frameLocator('iframe[title="La quête continue \\!"]').locator('#pixi-canvas').click({
    position: {
      x: 733,
      y: 539
    }
  });
  await page.frameLocator('iframe[title="La quête continue \\!"]').locator('#pixi-canvas').click({
    position: {
      x: 733,
      y: 539
    }
  });
  await page.frameLocator('iframe[title="La quête continue \\!"]').locator('#pixi-canvas').click({
    position: {
      x: 733,
      y: 539
    }
  });
  await page.frameLocator('iframe[title="La quête continue \\!"]').locator('#pixi-canvas').click({
    position: {
      x: 733,
      y: 539
    }
  });
  await page.frameLocator('iframe[title="La quête continue \\!"]').locator('#pixi-canvas').click({
    position: {
      x: 733,
      y: 539
    }
  });
  await page.frameLocator('iframe[title="La quête continue \\!"]').locator('#pixi-canvas').click({
    position: {
      x: 733,
      y: 539
    }
  });
  await page.frameLocator('iframe[title="La quête continue \\!"]').locator('#pixi-canvas').click({
    position: {
      x: 733,
      y: 539
    }
  });
  await page.keyboard.press('w');
  await page.keyboard.press('w');
  await page.keyboard.press('d');
  await page.keyboard.press('d');
  await page.keyboard.press('d');
  await page.keyboard.press('d');
});