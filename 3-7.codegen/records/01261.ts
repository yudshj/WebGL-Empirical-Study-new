import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://machupicchu360vr.com/');
  await page.goto('http://machupicchu360vr.com/#/');
  await page.getByText('High Bandwidth experience').click();
});