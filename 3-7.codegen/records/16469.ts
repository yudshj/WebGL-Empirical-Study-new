import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://studio.zeg.ai/');
  await page.getByText('Instant Create').click();
  await page.getByRole('button', { name: 'google Login with Google' }).click();
  await page.goto('https://api.zeg.ai/interaction/bHcKyNOWfo2NGN0EY944M');
});