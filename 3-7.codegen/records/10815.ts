import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://japanculturalexpovp.bunka.go.jp/WebGl');
  await page.frameLocator('#webview_WebViewObject').getByRole('link', { name: 'Accept' }).click();
  await page.frameLocator('#webview_WebViewObject').getByRole('link', { name: 'Guest user login' }).click();
  await page.frameLocator('#webview_WebViewObject').getByRole('link', { name: 'Yes' }).click();
  await page.frameLocator('#webview_WebViewObject').locator('img').nth(1).click();
  await page.frameLocator('#webview_WebViewObject').getByRole('link', { name: 'to the next' }).click();
  await page.frameLocator('#webview_WebViewObject').getByPlaceholder('Please enter within 30 alphanumerical characters').click();
  await page.frameLocator('#webview_WebViewObject').getByPlaceholder('Please enter within 30 alphanumerical characters').fill('john');
  await page.frameLocator('#webview_WebViewObject').getByRole('link', { name: 'to the next' }).click();
  await page.frameLocator('#webview_WebViewObject').locator('#right img').click();
  await page.frameLocator('#webview_WebViewObject').locator('#right img').click();
  await page.frameLocator('#webview_WebViewObject').locator('#right img').click();
  await page.frameLocator('#webview_WebViewObject').locator('#right img').click();
  await page.frameLocator('#webview_WebViewObject').locator('#enter img').click();
  await page.locator('#unity-canvas').click({
    position: {
      x: 610,
      y: 587
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 858,
      y: 453
    }
  });
});