import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://doomed2.io/');
  await page.getByPlaceholder('Nickname').click();
  await page.getByPlaceholder('Nickname').fill('123');
  await page.getByRole('button', { name: 'Play' }).click();
});