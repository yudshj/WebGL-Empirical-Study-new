import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://lines.chromeexperiments.com/');
  await page.getByRole('link', { name: 'Draw' }).click();
  await page.frameLocator('#draw-container').locator('canvas').click({
    position: {
      x: 732,
      y: 338
    }
  });
  await page.frameLocator('#draw-container').locator('canvas').click({
    position: {
      x: 601,
      y: 346
    }
  });
  await page.frameLocator('#draw-container').locator('canvas').click({
    position: {
      x: 952,
      y: 369
    }
  });
  await page.getByRole('link', { name: 'Drag' }).click();
  await page.frameLocator('#drag-container').locator('canvas').click({
    position: {
      x: 717,
      y: 453
    }
  });
  await page.frameLocator('#drag-container').locator('canvas').click({
    position: {
      x: 967,
      y: 241
    }
  });
  await page.frameLocator('#drag-container').locator('canvas').click({
    position: {
      x: 291,
      y: 332
    }
  });
  await page.frameLocator('#drag-container').locator('canvas').click({
    position: {
      x: 885,
      y: 366
    }
  });
  await page.frameLocator('#drag-container').locator('canvas').click({
    position: {
      x: 664,
      y: 413
    }
  });
  await page.frameLocator('#drag-container').locator('canvas').click({
    position: {
      x: 1056,
      y: 620
    }
  });
});