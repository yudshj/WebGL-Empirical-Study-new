import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://zoozamosc.wkraj.pl/html5/index.php?id=82580');
  await page.getByRole('link', { name: 'POCZĄTEK' }).click();
  await page.getByRole('img').nth(2).click();
});