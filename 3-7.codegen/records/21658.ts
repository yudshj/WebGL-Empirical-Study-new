import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.firecaster.com/tay3d/');
  await page.getByText('Play').click();
  await page.locator('#hint').click();
});