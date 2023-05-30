import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://cepuj.wkraj.pl/html5/index.php?id=81163');
  await page.getByRole('img').nth(2).click();
  await page.getByRole('img').nth(2).click();
  await page.getByRole('link', { name: '' }).nth(1).click();
  await page.locator('#key_1513544166002 > .marker > .ico').first().click();
  await page.goto('https://cepuj.wkraj.pl/html5/index.php?id=81163#81119/354,1');
});