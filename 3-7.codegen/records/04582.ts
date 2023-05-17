import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://agnes-ux-ui-design-portfolio.webflow.io/');
  await page.getByRole('link', { name: 'Light' }).click();
});