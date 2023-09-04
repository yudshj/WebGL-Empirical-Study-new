import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://bappeda.jabarprov.go.id/');
  await page.frameLocator('iframe[title="FlowPaper website pdf viewer"]').locator('#pagesContainer_documentViewer_arrowright').click();
  await page.frameLocator('iframe[title="FlowPaper website pdf viewer"]').locator('#dummyPage_1_documentViewer_textoverlay').click();
  await page.locator('#heroCarousel').getByRole('button', { name: 'Next' }).click();
});