import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://tyran.io/');
  await page.getByPlaceholder('Nickname').click();
  await page.keyboard.type('test');
  await page.getByRole('button', { name: 'PLAY' }).click();
  await page.keyboard.press('w', { delay: 1000 });
});