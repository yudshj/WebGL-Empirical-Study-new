import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://towerblocks.games235.com/');
  await page.getByText('Start', { exact: true }).click();
});