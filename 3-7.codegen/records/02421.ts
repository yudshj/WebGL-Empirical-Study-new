import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.barakfund.com/about-us/invest-in-africa.aspx#sendou-power-project');
  await page.getByText('AGREE').click();
  await page.locator('div:nth-child(7) > .fp-tableCell > .WhiteBackground').click();
  await page.locator('#fp-nav > ul > li:nth-child(2) > a').click();
  await page.locator('#fp-nav > ul > li:nth-child(6) > a').click();
  await page.locator('li:nth-child(7) > a').click();
  await page.locator('li:nth-child(9) > a').click();
});