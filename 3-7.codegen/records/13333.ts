import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://news.microsoft.com/stories/microsoft-datacenter-tour/');
  await page.getByRole('button', { name: 'Start Exploring' }).click();
});