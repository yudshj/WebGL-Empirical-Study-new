import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://radiantinferno.github.io/');
  await page.locator('#selectIconNext').click();
  await page.locator('#selectIconNext').click();
  await page.locator('#selectIconNext').click();
  await page.locator('#selectIconNext').click();
  await page.locator('#selectIconNext').click();
});