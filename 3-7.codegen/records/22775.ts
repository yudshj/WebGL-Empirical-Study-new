import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.hypnose.academy/');
  await page.locator('#popup942097 path').click();
  await page.locator('[id="\\31 669332383074"] img').click();
});