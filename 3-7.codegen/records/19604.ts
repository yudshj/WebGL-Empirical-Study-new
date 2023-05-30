import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.bingoaloha.com/');
  await page.frameLocator('iframe[name="mainIframe"]').locator('#emailbtn').click();
  await page.frameLocator('iframe[name="mainIframe"]').getByPlaceholder('Email').click();
  await page.frameLocator('iframe[name="mainIframe"]').getByPlaceholder('Email').fill('asbuf@fdefoij.com');
  await page.frameLocator('iframe[name="mainIframe"]').getByPlaceholder('Password').click();
  await page.frameLocator('iframe[name="mainIframe"]').getByPlaceholder('Password').fill('asfdaf');
});