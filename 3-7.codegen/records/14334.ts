import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://pixelynx.io/musicverse/?noredirect=1');
  await page.getByRole('button', { name: 'loading... enter with sound' }).click();
  await page.getByRole('button', { name: 'accept' }).click();
  await page.getByRole('button').first().click();
  await page.getByRole('button').first().click();
  await page.locator('section').filter({ hasText: 'SCROLL DOWN' }).getByRole('img').click();
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});