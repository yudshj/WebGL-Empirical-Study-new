import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.vinci-play.com/pdf/katalog_robinia_2021_en');
  await page.goto('https://www.vinci-play.com/pdf/katalog_robinia_2021_en#page=1');
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
});