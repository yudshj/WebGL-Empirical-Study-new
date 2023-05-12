import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://photo-sphere-viewer.js.org/guide/#install-photo-sphere-viewer');
});