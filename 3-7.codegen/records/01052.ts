import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://iu7.bmstu.ru/');
  await page.getByText('start', { exact: true }).click();
  await page.getByText('Нажми на него, чтобы узнать, почему тебе стоит поступать на ИУ7').click();
  await page.locator('#laptop > path:nth-child(32)').click();
  await page.locator('#laptop-md span').nth(1).click();
  await page.locator('.table-illustration').click();
  await page.locator('#bookshelf ellipse').click();
  await page.locator('.free-area').click();
  await page.locator('#laptop-screen').click();
  await page.locator('.free-area').click();
  await page.locator('#lamp > path:nth-child(12)').click();
});