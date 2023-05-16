import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://kitchen-designer.homehardware.ca/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.getByRole('button', { name: 'Guide me to a kitchen' }).click();
});