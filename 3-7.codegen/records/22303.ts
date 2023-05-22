import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.greenbrier.ruffhouseva.com/virtual-tour');
  await page.frameLocator('iframe[title="Embedded Content"]').locator('div').filter({ hasText: /^Begin Tour$/ }).nth(1).click();
  await page.frameLocator('iframe[title="Embedded Content"]').locator('div').filter({ hasText: /^Pan Up$/ }).first().click();
  await page.frameLocator('iframe[title="Embedded Content"]').locator('div').filter({ hasText: /^Pan Down$/ }).first().click();
  await page.frameLocator('iframe[title="Embedded Content"]').locator('div').filter({ hasText: /^Pan Right$/ }).first().click();
  await page.frameLocator('iframe[title="Embedded Content"]').locator('div').filter({ hasText: /^Pan Left$/ }).first().click();
  await page.frameLocator('iframe[title="Embedded Content"]').locator('div:nth-child(2) > div:nth-child(2)').first().click();
  await page.frameLocator('iframe[title="Embedded Content"]').locator('div:nth-child(2) > div:nth-child(2)').first().click();
  await page.frameLocator('iframe[title="Embedded Content"]').locator('div').filter({ hasText: /^Pan Right$/ }).first().click();
  await page.frameLocator('iframe[title="Embedded Content"]').locator('div').filter({ hasText: /^Zoom In$/ }).first().dblclick();
  await page.frameLocator('iframe[title="Embedded Content"]').locator('div').filter({ hasText: /^Zoom Out$/ }).first().dblclick();
  await page.frameLocator('iframe[title="Embedded Content"]').locator('div:nth-child(10) > div > div:nth-child(6) > div').first().click();
});