import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://maple.cloud/app/4535629/Nonlinear+Fit%2C+Optimization%2C+and+the+DirectSearch+Package');
});