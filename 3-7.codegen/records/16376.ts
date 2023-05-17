import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://stcatherines.mused.org/en/');
  await page.getByRole('link', { name: 'Explore', exact: true }).click();
});