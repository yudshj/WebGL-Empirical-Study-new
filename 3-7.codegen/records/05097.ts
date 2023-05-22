import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ar.badbunnytrilogy.com/');
  await page.getByRole('button', { name: 'ENTRAR' }).click();
});