import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://mlmed.org/tools/xray/');
  await page.getByRole('button', { name: 'Accept NOT FOR MEDICAL USE' }).click({
    modifiers: ['Alt']
  });
  await page.locator('#files').click();
  await page.locator('#files').setInputFiles('1.jpg');
});