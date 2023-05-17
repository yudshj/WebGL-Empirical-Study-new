import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://codepen.io/teropa/pen/ddqEwj');
  await page.frameLocator('iframe[name="CodePen"]').locator('.keyboard > div:nth-child(15)').click();
  await page.frameLocator('iframe[name="CodePen"]').locator('.keyboard > div:nth-child(29)').click();
});