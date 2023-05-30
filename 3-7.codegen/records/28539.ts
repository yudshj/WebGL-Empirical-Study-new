import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.wikiverse.io/');
  await page.getByText('Complete250.0005%of Wikipedia').click();
  await page.getByText('START', { exact: true }).click();
  await page.getByText('skip intro').click();
  await page.locator('canvas').click({
    position: {
      x: 825,
      y: 225
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 805,
      y: 102
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 838,
      y: 131
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 898,
      y: 262
    }
  });
});