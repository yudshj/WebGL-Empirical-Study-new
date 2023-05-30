import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.goodboydigital.com/');
  await page.getByText('DIGITAL', { exact: true }).click();
  await page.getByText('PLAY', { exact: true }).click();
  await page.locator('div').filter({ hasText: 'DIGITALPLAYPRODUCTION' }).first().click();
  await page.locator('div').filter({ hasText: 'DIGITALPLAYPRODUCTION' }).first().click();
  await page.locator('section').filter({ hasText: 'DIGITALPLAYPRODUCTION' }).getByRole('img').click();
  await page.getByRole('link', { name: 'Find out more' }).click();
  await page.locator('.widget-services__services > div:nth-child(2) > a').click();
  await page.getByRole('link', { name: 'Back' }).click();
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});