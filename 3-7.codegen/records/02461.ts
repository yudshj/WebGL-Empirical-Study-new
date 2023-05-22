import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.bodaborg.com/');
  await page.goto('https://www.bodaborg.com/#intro');
  await page.getByRole('button', { name: 'Start' }).click();
  await page.goto('https://www.bodaborg.com/');
});