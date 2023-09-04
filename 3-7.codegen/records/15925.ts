import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://sinchon.sbsgameacademy.com/');
  await page.getByRole('button', { name: 'Previous slide' }).click();
  await page.locator('#mainCurri').getByRole('listitem').filter({ hasText: '게임프로그래밍' }).click();
});