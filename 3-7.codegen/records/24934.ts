import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.ninefive.com/');
  await page.locator('section').filter({ hasText: '12TH ANNIVERSARY BGF RETAIL AND5 COFFEE SeAH HYUNDAI N INBODY SAMSUNG SEMICONDUC' }).getByRole('button').nth(1).click();
  await page.locator('section').filter({ hasText: '12TH ANNIVERSARY BGF RETAIL AND5 COFFEE SeAH HYUNDAI N INBODY SAMSUNG SEMICONDUC' }).getByRole('button').nth(1).click();
  await page.locator('div').filter({ hasText: 'NINEFIVEDIGITAL DESIGN ©2022 NINEFIVE PROJECT ABOUT MEDIA EXPERTISE PARTNER APPL' }).getByRole('link').first().click();
  await page.locator('div').filter({ hasText: 'NINEFIVEDIGITAL DESIGN ©2022 NINEFIVE PROJECT ABOUT MEDIA EXPERTISE PARTNER APPL' }).getByRole('link').nth(1).click();
  await page.locator('section').filter({ hasText: '12TH ANNIVERSARY BGF RETAIL AND5 COFFEE SeAH HYUNDAI N INBODY SAMSUNG SEMICONDUC' }).getByRole('button').first().click();
  await page.locator('section').filter({ hasText: '12TH ANNIVERSARY BGF RETAIL AND5 COFFEE SeAH HYUNDAI N INBODY SAMSUNG SEMICONDUC' }).getByRole('button').first().click();
});