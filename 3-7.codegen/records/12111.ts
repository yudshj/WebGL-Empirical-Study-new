import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://mad.com/games/duck_life_treasure_hunt.html?big_tile');
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    modifiers: ['Alt'],
    position: {
      x: 486,
      y: 500
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    modifiers: ['Alt'],
    position: {
      x: 490,
      y: 365
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    modifiers: ['Alt'],
    position: {
      x: 490,
      y: 365
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    modifiers: ['Alt'],
    position: {
      x: 490,
      y: 365
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    modifiers: ['Alt'],
    position: {
      x: 490,
      y: 365
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    modifiers: ['Alt'],
    position: {
      x: 490,
      y: 365
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    modifiers: ['Alt'],
    position: {
      x: 375,
      y: 483
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    modifiers: ['Alt'],
    position: {
      x: 379,
      y: 484
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    modifiers: ['Alt'],
    position: {
      x: 493,
      y: 237
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('body').press('Alt+8');
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    position: {
      x: 477,
      y: 257
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    position: {
      x: 474,
      y: 261
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    position: {
      x: 394,
      y: 336
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    position: {
      x: 601,
      y: 321
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    position: {
      x: 434,
      y: 301
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    position: {
      x: 437,
      y: 485
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    position: {
      x: 185,
      y: 507
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    position: {
      x: 131,
      y: 274
    }
  });
  await page.frameLocator('#div_to_wrap iframe').locator('#unity-canvas').click({
    position: {
      x: 454,
      y: 253
    }
  });
});