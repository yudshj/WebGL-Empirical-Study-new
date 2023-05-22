import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.menjasaenfamilia.org/ca/');
  await page.locator('#gameCanvas').click({
    position: {
      x: 752,
      y: 260
    }
  });
  await page.locator('#gameCanvas').click({
    position: {
      x: 531,
      y: 179
    }
  });
  await page.locator('#gameCanvas').click({
    position: {
      x: 724,
      y: 34
    }
  });
  await page.locator('#gameCanvas').click({
    position: {
      x: 730,
      y: 39
    }
  });
  await page.locator('#gameCanvas').click({
    position: {
      x: 511,
      y: 590
    }
  });
  await page.locator('#gameCanvas').click({
    position: {
      x: 738,
      y: 46
    }
  });
  await page.getByRole('link', { name: 'Accepto' }).click();
});