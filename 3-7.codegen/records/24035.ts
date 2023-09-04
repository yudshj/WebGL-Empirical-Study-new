import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.ls2usa.com/2022-spring-catalog');
  await page.frameLocator('iframe[name="htmlComp-iframe"]').frameLocator('iframe').getByRole('img', { name: 'Next Page' }).click();
  await page.frameLocator('iframe[name="htmlComp-iframe"]').frameLocator('iframe').getByRole('img', { name: 'Next Page' }).click();
  await page.frameLocator('iframe[name="htmlComp-iframe"]').frameLocator('iframe').getByRole('img', { name: 'Next Page' }).click();
  await page.frameLocator('iframe[name="htmlComp-iframe"]').frameLocator('iframe').getByRole('img', { name: 'Previous Page' }).click();
  await page.frameLocator('iframe[name="htmlComp-iframe"]').frameLocator('iframe').locator('#pagesContainer_documentViewer_arrowrightbottom').click();
  await page.frameLocator('iframe[name="htmlComp-iframe"]').frameLocator('iframe').locator('.flowpaper_fisheye_leftArrow').click();
});