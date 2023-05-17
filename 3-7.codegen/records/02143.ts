import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://virtualart.chromeexperiments.com/');
  await page.getByRole('button', { name: 'Start', exact: true }).click();
  await page.getByRole('link', { name: 'Andrea Blasich Andrea Blasich Sculptor' }).click();
});