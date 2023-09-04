import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.breambaycollege.school.nz/master2021/index.html');
  await page.goto('http://www.breambaycollege.school.nz/master2021/index.html#page=1');
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.locator('#pagesContainer_documentViewer_arrowleft').click();
});