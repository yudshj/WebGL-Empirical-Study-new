import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.adultswim.com/videos/rick-and-morty');
  await page.getByRole('button', { name: 'I Agree to the Updated Terms of Use' }).click();
});