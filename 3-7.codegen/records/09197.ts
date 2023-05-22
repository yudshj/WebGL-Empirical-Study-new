import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://gamegirlllc.com/');
  await page.frameLocator('#fl-post-341 iframe').locator('#unity-canvas').click({
    position: {
      x: 189,
      y: 365
    }
  });
  await page.frameLocator('#fl-post-341 iframe').locator('#unity-canvas').click({
    position: {
      x: 235,
      y: 589
    }
  });
  await page.frameLocator('#fl-post-341 iframe').locator('#unity-canvas').click({
    position: {
      x: 191,
      y: 488
    }
  });
  await page.frameLocator('#fl-post-341 iframe').locator('#unity-canvas').click({
    position: {
      x: 239,
      y: 327
    }
  });
  await page.frameLocator('#fl-post-341 iframe').locator('#unity-canvas').click({
    position: {
      x: 313,
      y: 320
    }
  });
  await page.frameLocator('#fl-post-341 iframe').locator('#unity-canvas').click({
    position: {
      x: 268,
      y: 321
    }
  });
  await page.frameLocator('#fl-post-341 iframe').locator('#unity-canvas').click({
    position: {
      x: 302,
      y: 321
    }
  });
  await page.frameLocator('#fl-post-341 iframe').locator('#unity-canvas').click({
    position: {
      x: 116,
      y: 492
    }
  });
  await page.frameLocator('#fl-post-341 iframe').locator('#unity-canvas').click({
    button: 'right',
    position: {
      x: 128,
      y: 491
    }
  });
  await page.frameLocator('#fl-post-341 iframe').locator('#unity-canvas').click({
    position: {
      x: 156,
      y: 492
    }
  });
});