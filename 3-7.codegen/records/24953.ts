import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.nmroads.com/');
  await page.goto('https://www.nmroads.com/mapIndex.html?');
  await page.locator('image:nth-child(11)').click();
  await page.getByText('Zoom To', { exact: true }).click();
});