import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.arbesbach.gv.at/');
  await page.getByText('Alle akzeptieren').first().click();
  await page.locator('.ls-nav-next').click();
});