import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.ximechennai.org/campus-tour/');
  await page.locator('[id="\\31 37"] canvas').nth(1).click({
    position: {
      x: 458,
      y: 286
    }
  });
  await page.locator('[id="\\35 "]').getByRole('img').click();
  await page.locator('[id="\\35 "]').getByRole('img').click();
  await page.locator('[id="\\34 0"] > div:nth-child(2) > div > div').click();
  await page.locator('[id="\\34 0"] > div:nth-child(2) > div > div').click();
  await page.locator('[id="\\33 9"] > div:nth-child(2) > div > div').click();
});