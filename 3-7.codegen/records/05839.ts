import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://blackdogstory.com/');
  await page.locator('#indicators div').filter({ hasText: 'CLICK' }).locator('div').first().click();
  await page.locator('canvas').click({
    position: {
      x: 606,
      y: 362
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 654,
      y: 375
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 654,
      y: 375
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 654,
      y: 375
    }
  });
  await page.locator('#indicators div').filter({ hasText: 'CLICK' }).locator('div').nth(4).click();
  await page.locator('#indicators div').filter({ hasText: 'CLICK' }).locator('div').first().click();
  await page.locator('#indicators div').filter({ hasText: 'CLICK' }).locator('div').first().click();
});