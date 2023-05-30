import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://play.playitsafe.eu/');
  await page.locator('#gameCanvas').click({
    position: {
      x: 723,
      y: 298
    }
  });
  await page.locator('body').press('Enter');
  await page.locator('#gameCanvas').click({
    position: {
      x: 742,
      y: 518
    }
  });
  await page.locator('#gameCanvas').click({
    position: {
      x: 741,
      y: 680
    }
  });
  await page.locator('#gameCanvas').click({
    position: {
      x: 764,
      y: 407
    }
  });
});