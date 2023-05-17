import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://buildnowgg.co/');
  await page.frameLocator('#iframehtml5').frameLocator('#iframehtml5').getByRole('button', { name: 'Play' }).click();
});