import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://windland-neotix.vercel.app/');
  await page.getByText('Explore').click();
});