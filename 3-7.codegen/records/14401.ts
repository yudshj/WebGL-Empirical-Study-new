import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://play.mobilityware.com/');
  await page.goto('https://play.mobilityware.com/frame/');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.frameLocator('.embed-responsive-item').locator('#unity-canvas').click({
    position: {
      x: 449,
      y: 484
    }
  });
  await page.frameLocator('.embed-responsive-item').locator('#unity-canvas').click({
    position: {
      x: 561,
      y: 150
    }
  });
  await page.frameLocator('.embed-responsive-item').locator('#unity-canvas').click({
    position: {
      x: 453,
      y: 495
    }
  });
  await page.frameLocator('.embed-responsive-item').locator('#unity-canvas').click({
    position: {
      x: 453,
      y: 501
    }
  });
  await page.frameLocator('.embed-responsive-item').locator('#unity-canvas').click({
    position: {
      x: 494,
      y: 117
    }
  });
  await page.frameLocator('.embed-responsive-item').locator('#unity-canvas').click({
    position: {
      x: 598,
      y: 136
    }
  });
  await page.frameLocator('.embed-responsive-item').locator('#unity-canvas').click({
    position: {
      x: 445,
      y: 115
    }
  });
});