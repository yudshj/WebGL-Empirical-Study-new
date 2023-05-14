import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.boeing.com/space/international-space-station/index.page#/hotspot');
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.getByRole('link', { name: 'START 3D EXPERIENCE' }).click();
});