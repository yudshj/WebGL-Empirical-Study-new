import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.weareinfluence.com/en');
  await page.getByRole('button', { name: 'play the game' }).click();
});