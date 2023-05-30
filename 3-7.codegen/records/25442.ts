import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.penzil.app/');
  await page.locator('#threeJsCanvas').click({
    position: {
      x: 700,
      y: 273
    }
  });
  await page.locator('#viewportCanvas').click({
    position: {
      x: 57,
      y: 78
    }
  });
  await page.locator('#viewportCanvas').click({
    position: {
      x: 101,
      y: 77
    }
  });
  await page.locator('#viewportCanvas').click({
    position: {
      x: 125,
      y: 126
    }
  });
  await page.locator('#viewportCanvas').click({
    position: {
      x: 132,
      y: 134
    }
  });
  await page.locator('#threeJsCanvas').click({
    position: {
      x: 1248,
      y: 158
    }
  });
  await page.getByText('Plane').click();
  await page.getByRole('img', { name: 'Set the 3d canvas shape to cube' }).click();
  await page.getByText('CubeMoveUnlockedLockedVisibleHiddenSnap offSnap on').click();
  await page.locator('#threeJsCanvas').click({
    position: {
      x: 691,
      y: 322
    }
  });
  await page.getByText('Visible').click();
  await page.getByText('Hidden').click();
  await page.getByText('Snap off').click();
  await page.getByText('Snap on').click();
  await page.locator('#threeJsCanvas').click({
    position: {
      x: 681,
      y: 357
    }
  });
  await page.locator('#threeJsCanvas').click({
    position: {
      x: 650,
      y: 359
    }
  });
  await page.locator('#threeJsCanvas').click({
    position: {
      x: 661,
      y: 335
    }
  });
  await page.locator('#threeJsCanvas').click({
    position: {
      x: 680,
      y: 318
    }
  });
  await page.getByRole('img', { name: 'Select draw tool' }).click();
  await page.locator('#threeJsCanvas').click({
    position: {
      x: 686,
      y: 288
    }
  });
  await page.locator('#threeJsCanvas').click({
    position: {
      x: 613,
      y: 220
    }
  });
  await page.getByRole('img', { name: 'Reset canvas position, rotation and scale' }).click();
});