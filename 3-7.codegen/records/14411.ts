import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://play.tropy.co.il/');
  await page.locator('#game-canvas').click({
    position: {
      x: 821,
      y: 194
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 784,
      y: 538
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 522,
      y: 552
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 552,
      y: 550
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 552,
      y: 550
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 888,
      y: 199
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 819,
      y: 457
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 870,
      y: 198
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 918,
      y: 302
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 929,
      y: 216
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 914,
      y: 298
    }
  });
  await page.getByText('התחילו לשחקעזרהבטיחות ברשתמנוייםמלאכיםגלריהבלוגחנות נא להמתין... WebGL builds ar').press('ArrowRight');
  await page.getByText('התחילו לשחקעזרהבטיחות ברשתמנוייםמלאכיםגלריהבלוגחנות נא להמתין... WebGL builds ar').press('ArrowRight');
  await page.getByText('התחילו לשחקעזרהבטיחות ברשתמנוייםמלאכיםגלריהבלוגחנות נא להמתין... WebGL builds ar').press('ArrowRight');
  await page.getByText('התחילו לשחקעזרהבטיחות ברשתמנוייםמלאכיםגלריהבלוגחנות נא להמתין... WebGL builds ar').press('ArrowRight');
  await page.getByText('התחילו לשחקעזרהבטיחות ברשתמנוייםמלאכיםגלריהבלוגחנות נא להמתין... WebGL builds ar').press('ArrowRight');
  await page.getByText('התחילו לשחקעזרהבטיחות ברשתמנוייםמלאכיםגלריהבלוגחנות נא להמתין... WebGL builds ar').press('ArrowRight');
  await page.locator('#game-canvas').click({
    position: {
      x: 842,
      y: 248
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 754,
      y: 470
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 833,
      y: 259
    }
  });
  await page.getByText('התחילו לשחקעזרהבטיחות ברשתמנוייםמלאכיםגלריהבלוגחנות נא להמתין... WebGL builds ar').press('NumLock');
  await page.locator('#game-canvas').click({
    position: {
      x: 809,
      y: 462
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 912,
      y: 258
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 889,
      y: 343
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 884,
      y: 263
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 804,
      y: 262
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 804,
      y: 265
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 801,
      y: 348
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 699,
      y: 266
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 704,
      y: 346
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 775,
      y: 452
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 789,
      y: 474
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 357,
      y: 227
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 585,
      y: 298
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 497,
      y: 302
    }
  });
  await page.locator('#game-canvas').click({
    clickCount: 4,
    position: {
      x: 597,
      y: 351
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 564,
      y: 317
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 564,
      y: 317
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 324,
      y: 566
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 671,
      y: 414
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 958,
      y: 88
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 498,
      y: 442
    }
  });
  await page.locator('#game-canvas').click({
    position: {
      x: 459,
      y: 342
    }
  });
});