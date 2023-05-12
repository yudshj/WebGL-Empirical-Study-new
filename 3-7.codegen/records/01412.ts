import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://mymostbeautifulnightmare.road-ends.com/');
  await page.getByRole('link', { name: 'Fall' }).click();
  await page.getByRole('link', { name: 'Plunge' }).click();
  await page.locator('.leavingLayer').click();
});