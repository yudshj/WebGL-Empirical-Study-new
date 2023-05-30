import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.techpay.io/');
  await page.getByRole('button', { name: 'b e g i n' }).click();
  await page.getByRole('button', { name: 'E X P L O R E T H E F U T U R E' }).click();
  await page.goto('https://www.techpay.io/#about');
  await page.locator('.hidden > button:nth-child(4)').click();
  await page.locator('.hidden > button:nth-child(3)').click();
  await page.locator('.hidden > button:nth-child(5)').click();
  await page.locator('.hidden > button:nth-child(6)').click();
});