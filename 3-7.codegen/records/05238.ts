import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsexperiments.withgoogle.com/diving-into-an-acidifying-ocean/');
  await page.getByText('S T A R T').click();
});