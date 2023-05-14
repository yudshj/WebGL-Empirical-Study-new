import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://retosterricolas.blogspot.com/');
  await page.frameLocator('#post-body-9128308505073031804 iframe').getByRole('button', { name: 'Run Button' }).click();
  await page.frameLocator('#post-body-9128308505073031804 iframe').getByRole('button', { name: 'Run Button' }).click();
});