import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ares.jsc.nasa.gov/astromaterials3d/');
  await page.frameLocator('iframe[title="\\33 D view of one of the space rocks"]').locator('canvas').click({
    position: {
      x: 275,
      y: 202
    }
  });
  await page.frameLocator('iframe[title="\\33 D view of one of the space rocks"]').locator('canvas').click({
    position: {
      x: 268,
      y: 109
    }
  });
  await page.frameLocator('iframe[title="\\33 D view of one of the space rocks"]').locator('canvas').click({
    position: {
      x: 207,
      y: 166
    }
  });
  await page.frameLocator('iframe[title="\\33 D view of one of the space rocks"]').locator('canvas').click({
    position: {
      x: 262,
      y: 114
    }
  });
  await page.getByRole('button', { name: 'VISIT APOLLO COLLECTION' }).click();
  await page.locator('.apollo-11').first().click();
  await page.locator('.apollo-15').first().click();
  await page.getByRole('link', { name: 'Apollo 15' }).click();
  await page.getByRole('link', { name: 'Image of rock' }).first().click();
});