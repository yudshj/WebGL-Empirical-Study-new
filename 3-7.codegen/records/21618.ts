import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.filsonstore.cz/flip/filsonstore-flip-2022-05-02.html');
  await page.locator('.fa-angle-right').click();
  await page.locator('.fa-angle-right').click();
  await page.locator('.fa-angle-right').click();
});