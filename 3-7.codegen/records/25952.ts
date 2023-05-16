import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://pwnk.digital/');
  await page.getByRole('button', { name: 'enter' }).click();
  await page.getByText('TAKE A SPIN').click();
  await page.getByRole('button').filter({ hasText: '.arrowDown{fill:#fff;}' }).click();
});