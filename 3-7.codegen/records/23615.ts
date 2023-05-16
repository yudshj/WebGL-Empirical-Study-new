import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.kubota.com/futurecube/');
  await page.locator('.js_topIntro_cubeButton').click();
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
});