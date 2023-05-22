import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://yapboz.eba.gov.tr/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 390,
      y: 406
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 526,
      y: 122
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 406,
      y: 71
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 642,
      y: 510
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 682,
      y: 541
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 595,
      y: 539
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 468,
      y: 553
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 485,
      y: 463
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 874,
      y: 301
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 827,
      y: 43
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 558,
      y: 526
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 924,
      y: 557
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 366,
      y: 73
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 38,
      y: 61
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 62,
      y: 62
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 282,
      y: 55
    }
  });
});