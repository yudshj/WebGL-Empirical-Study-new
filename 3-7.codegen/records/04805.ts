import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://amasya3b.tkgm.gov.tr/');
  await page.goto('https://amasya3b.tkgm.gov.tr/#/');
  await page.getByTitle('Show map menu').click();
  await page.locator('canvas').click({
    position: {
      x: 634,
      y: 430
    }
  });
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowRight');
  await page.getByTitle('Pan down').click();
  await page.getByTitle('Pan right').click();
  await page.getByTitle('Pan left').click();
  await page.getByTitle('Pan up').click();
  await page.getByTitle('Zoom in').locator('i').click();
});