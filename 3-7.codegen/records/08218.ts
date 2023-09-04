import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://emperia.digital/Harrods/Burberry/index.htm');
  await page.locator('[id="\\31 046"] div').nth(4).click();
  await page.locator('[id="\\31 264"] canvas').nth(1).click({
    position: {
      x: 107,
      y: 407
    }
  });
  await page.locator('[id="\\31 179"] div').nth(4).click();
  await page.locator('[id="\\31 264"] canvas').nth(1).click({
    position: {
      x: 520,
      y: 502
    }
  });
  await page.locator('[id="\\31 264"] canvas').nth(1).click({
    position: {
      x: 710,
      y: 453
    }
  });
  await page.locator('[id="\\36 47"] div').nth(4).click();
  await page.locator('[id="\\31 264"] canvas').nth(1).click({
    position: {
      x: 907,
      y: 465
    }
  });
});