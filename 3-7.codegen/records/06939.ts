import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://codepen.io/teropa/pen/gvwwZL');
  await page.frameLocator('iframe[name="CodePen"]').locator('.keyboard > div:nth-child(13)').click();
  await page.frameLocator('iframe[name="CodePen"]').locator('.keyboard > div:nth-child(15)').click();
  await page.frameLocator('iframe[name="CodePen"]').locator('.keyboard > div:nth-child(17)').click();
  await page.frameLocator('iframe[name="CodePen"]').locator('.keyboard > div:nth-child(19)').click();
  await page.frameLocator('iframe[name="CodePen"]').locator('.keyboard > div:nth-child(20)').click();
  await page.frameLocator('iframe[name="CodePen"]').locator('.keyboard > div:nth-child(28)').click();
  await page.frameLocator('iframe[name="CodePen"]').locator('.keyboard > div:nth-child(33)').click();
  await page.frameLocator('iframe[name="CodePen"]').locator('.keyboard > div:nth-child(6)').click();
  await page.frameLocator('iframe[name="CodePen"]').locator('.keyboard > div:nth-child(19)').click();
});