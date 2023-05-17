import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://digital-xp.lg2.com/en/5years/');
  await page.getByRole('button', { name: 'Start' }).click();
});