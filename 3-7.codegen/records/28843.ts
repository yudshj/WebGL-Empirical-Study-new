import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://xgdps.gdbrowser.com/');
  await page.getByRole('link', { name: 'Daily Level' }).click();
  await page.getByRole('link', { name: 'Weekly Demon' }).click();
  await page.getByRole('link', { name: 'Gauntlets' }).click();
});