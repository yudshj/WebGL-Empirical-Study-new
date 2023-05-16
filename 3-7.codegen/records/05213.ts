import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/fourth-of-july-fireworks/3wFbmusK9c852w');
  await page.getByRole('button', { name: 'Play game' }).click();
});