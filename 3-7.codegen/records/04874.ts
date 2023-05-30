import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://andreareni.com/');
  await page.locator('#ar_input').click();
  await page.locator('#ar_input').fill('h');
  await page.locator('#ar_input').press('Enter');
  await page.locator('#ar_input').fill('chat');
  await page.locator('#ar_input').press('Enter');
  await page.locator('#ar_input').fill('hello world');
  await page.locator('#ar_input').press('Enter');
  await page.locator('#ar_input').fill('np');
  await page.locator('#ar_input').press('Enter');
  await page.locator('#ar_input').fill('exit chat');
  await page.locator('#ar_input').press('Enter');
  await page.locator('#ar_input').fill('np');
  await page.locator('#ar_input').press('Enter');
});