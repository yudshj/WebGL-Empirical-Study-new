import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://robertsspaceindustries.com/starmap');
  await page.getByText('Allow all cookies').click();
  await page.getByRole('button', { name: 'Enter full screen' }).click();
  await page.goto('https://robertsspaceindustries.com/starmap?camera=10,0,0.4,0,0');
  await page.getByRole('button', { name: 'Acknowledge & continue' }).click();
  await page.getByRole('button', { name: 'Explore starmap' }).click();
});