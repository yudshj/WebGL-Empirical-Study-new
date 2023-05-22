import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://sniffer-dog-quest.web.app/');
  await page.locator('#btn-start').click();
  await page.locator('#btn-start-next-level').click();
  await page.locator('#upArrowIcon').click();
  await page.locator('#rightArrowIcon').click();
  await page.locator('#upArrowIcon').click();
  await page.locator('#upArrowIcon').click();
  await page.locator('#leftArrowIcon').click();
  await page.locator('#rightArrowIcon').click();
  await page.locator('#rightArrowIcon').click();
  await page.locator('#upArrowIcon').click();
  await page.locator('#upArrowIcon').click();
  await page.locator('#upArrowIcon').click();
  await page.locator('canvas').click({
    position: {
      x: 645,
      y: 606
    }
  });
  await page.locator('#rightArrowIcon').click();
  await page.locator('#rightArrowIcon').click();
});