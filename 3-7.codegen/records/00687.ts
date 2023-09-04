import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://eshabooks.com/wordpress/');
  await page.frameLocator('iframe[title="FlowPaper website pdf viewer"]').locator('#toolbar_documentViewer div').nth(1).click();
  await page.frameLocator('iframe[title="FlowPaper website pdf viewer"]').getByRole('img', { name: 'Next Page' }).click();
  await page.frameLocator('iframe[title="FlowPaper website pdf viewer"]').locator('#pagesContainer_documentViewer_arrowright').click();
  await page.frameLocator('iframe[title="FlowPaper website pdf viewer"]').locator('#pagesContainer_documentViewer_arrowright').click();
  await page.frameLocator('iframe[title="FlowPaper website pdf viewer"]').locator('#pagesContainer_documentViewer_arrowleft').click();
  await page.frameLocator('iframe[title="FlowPaper website pdf viewer"]').locator('#pagesContainer_documentViewer_arrowrightbottom').click();
});