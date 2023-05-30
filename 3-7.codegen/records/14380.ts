import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://play.cryptofightclub.io/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 179,
      y: 584
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 634,
      y: 336
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 256,
      y: 525
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 653,
      y: 302
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 677,
      y: 278
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 604,
      y: 289
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 597,
      y: 351
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 608,
      y: 470
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 241,
      y: 530
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 806,
      y: 268
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 945,
      y: 617
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 879,
      y: 619
    }
  });
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('#unity-canvas').click({
    position: {
      x: 831,
      y: 572
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 831,
      y: 572
    }
  });
  await page.locator('#unity-canvas').click({
    button: 'right',
    position: {
      x: 831,
      y: 572
    }
  });
});