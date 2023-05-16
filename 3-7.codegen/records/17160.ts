import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://tonite.dance/');
  await page.locator('#Layer_1').click();
  await page.locator('div').filter({ hasText: '.st0{display:none}.st1{display:inline}.st2,.st3{stroke:#000}.st2{clip-path:url(#' }).first().click();
});