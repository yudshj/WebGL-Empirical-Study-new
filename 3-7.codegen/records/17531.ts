import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://uejj.com/');
  await page.locator('#clickBox').click();
  await page.locator('#clickBox').click();
  await page.locator('#clickBox').click();
  await page.locator('video').click();
  await page.locator('#clickBox').click();
  await page.locator('#clickBox').dblclick();
  await page.locator('#clickBox').dblclick();
  await page.locator('#clickBox').click();
  await page.locator('#clickBox').dblclick();
  await page.locator('#clickBox').click();
  await page.locator('#clickBox').dblclick();
  await page.locator('#clickBox').click();
  await page.locator('#clickBox').click();
});