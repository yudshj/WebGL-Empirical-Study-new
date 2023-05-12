import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://mainframe.agvr.co/');
  await page.getByRole('button', { name: 'Run website »' }).click();
});