import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw?cp=e30.');
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 665,
      y: 588
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 875,
      y: 525
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 709,
      y: 459
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 632,
      y: 469
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 867,
      y: 167
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 732,
      y: 503
    }
  });
  await page.getByRole('button', { name: 'Close Experiment' }).click();
  await page.getByRole('button', { name: 'Close Experiment' }).click();
  await page.getByRole('button', { name: 'Quit Game' }).click();
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 806,
      y: 448
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 576,
      y: 389
    }
  });
});