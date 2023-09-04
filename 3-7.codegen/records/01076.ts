import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://jocotitlan.gob.mx/index.php/ley-de-ingresos-y-de-presupuesto-de-egresos/');
  await page.frameLocator('iframe[title="FlowPaper website pdf viewer"] >> nth=0').locator('#pagesContainer_documentViewer_arrowright').click();
  await page.frameLocator('iframe[title="FlowPaper website pdf viewer"] >> nth=0').locator('#pagesContainer_documentViewer_arrowright').click();
});