import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://playtoearn.moniwar.io/?user=trial');
  await page.locator('#unity-canvas').click({
    position: {
      x: 1225,
      y: 33
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 658,
      y: 523
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 1189,
      y: 600
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 686,
      y: 412
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 233,
      y: 225
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 703,
      y: 528
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 729,
      y: 529
    }
  });

});