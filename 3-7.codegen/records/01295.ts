import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://masonbros.com/abbys-bakery/');
  await page.frameLocator('iframe[title="FlowPaper website pdf viewer"] >> nth=0').locator('#pagesContainer_documentViewer_arrowright').click();
  await page.frameLocator('iframe[title="FlowPaper website pdf viewer"] >> nth=1').locator('#pagesContainer_documentViewer_arrowright').click();
});