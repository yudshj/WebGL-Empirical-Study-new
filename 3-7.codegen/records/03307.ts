import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.moosbrunn.gv.at/');
  await page.getByText('Alle akzeptieren').first().click();
  await page.locator('.ls-bottom-slidebuttons > a').first().click();
  await page.locator('.ls-nav-active').click();
  await page.locator('.ls-bottom-slidebuttons > a:nth-child(3)').click();
  await page.locator('.ls-bottom-slidebuttons > a:nth-child(4)').click();
});