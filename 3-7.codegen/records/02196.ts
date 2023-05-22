import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://webglsamples.org/aquarium/aquarium.html');
  await page.getByText('5000', { exact: true }).click();
  await page.getByText('30000').click();
});