import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://threegraphs.com/charts/new/world/');
  await page.locator('#charttitle').click();
  await page.locator('#charttitle').fill('123');
  await page.getByText('Generate Chart').click();
});