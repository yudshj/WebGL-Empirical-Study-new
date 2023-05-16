import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://zgodanazycie.pl/wystawa/historia-polskiej-transplantologii/');
  await page.getByRole('button', { name: 'START' }).click();
});