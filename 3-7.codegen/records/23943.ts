import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.lithophanemaker.com/Lithophanes.html');
  await page.locator('#fileToUpload').click();
  await page.locator('#fileToUpload').setInputFiles('1.jpg');
  await page.getByRole('button', { name: 'Rotate Image 90 Degrees' }).click({
    clickCount: 4
  });
});