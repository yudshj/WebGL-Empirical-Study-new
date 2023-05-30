import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://kaiofiit.com/');
  await page.frameLocator('[id="\\/tours\\/Af7tcD8qDf"]').locator('canvas').click({
    position: {
      x: 1018,
      y: 318
    }
  });
  await page.frameLocator('[id="\\/tours\\/Af7tcD8qDf"]').locator('canvas').click({
    position: {
      x: 748,
      y: 315
    }
  });
  await page.frameLocator('[id="\\/tours\\/Af7tcD8qDf"]').locator('canvas').click({
    position: {
      x: 292,
      y: 301
    }
  });
  await page.frameLocator('[id="\\/tours\\/Af7tcD8qDf"]').locator('canvas').click({
    position: {
      x: 459,
      y: 340
    }
  });
  await page.frameLocator('[id="\\/tours\\/Af7tcD8qDf"]').locator('canvas').dblclick({
    position: {
      x: 809,
      y: 336
    }
  });
});