import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://qrui.thaiguild.com/');
  await page.getByRole('link', { name: 'Get Started' }).click();
  await page.goto('https://qrui.thaiguild.com/tool/?v=2.0#/');
  await page.goto('https://qrui.thaiguild.com/tool/?v=2.0');
  await page.goto('https://qrui.thaiguild.com/tool/?v=2.0#/');
  await page.locator('flt-glass-pane').click();
});