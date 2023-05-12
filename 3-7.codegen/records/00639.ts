import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://earthsdk.com/v/last/Apps/Demos/Viewer/index.html');
  await page.goto('http://earthsdk.com/v/last/Apps/Demos/Viewer/index.html?labserver=http%3A%2F%2Flocalhost%3A9003%2F');
});