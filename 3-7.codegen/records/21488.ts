import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.family.ikea.es/casarbol-demo-version/');
  await page.getByText('Start').click();
});