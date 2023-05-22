import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://3d.geo.bs.ch/');
  await page.locator('div:nth-child(2) > .layer__children > div:nth-child(3) > .row-header > .circle-button-wrapper > svg').click();
  await page.locator('div:nth-child(2) > .layer__children > div > .row-header > .circle-button-wrapper > svg').first().click();
  await page.locator('#oblique_main canvas').nth(2).click({
    position: {
      x: 1128,
      y: 627
    }
  });
});