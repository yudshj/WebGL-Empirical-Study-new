import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://atacac.com/drop/2017/');
  await page.locator('#maincontent').click();
  await page.locator('#maincontent').click();
  await page.locator('#maincontent').click();
  await page.locator('#maincontent').click();
  await page.locator('body').press('ArrowRight');
  await page.locator('#maincontent').click();
  await page.locator('#maincontent').click();
  await page.locator('#maincontent').click();
  await page.locator('#maincontent').click();
  await page.locator('#maincontent').click();
});