import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://meiblog.fullmecha.com/');
  await page.frameLocator('div >> internal:has-text=/^道案内が必要？【全天球Ver\\.】 - Spherical Image - RICOH THETA$/ >> iframe').getByRole('img', { name: 'Zoom in' }).click();
});