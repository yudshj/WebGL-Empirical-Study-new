import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://kitsune.life.coocan.jp/main/');
  await page.frameLocator('iframe[title="FlowPaper website pdf viewer"]').locator('#pagesContainer_documentViewer_arrowright').click();
  await page.frameLocator('iframe[title="FlowPaper website pdf viewer"]').locator('#pagesContainer_documentViewer_arrowright').click();
});