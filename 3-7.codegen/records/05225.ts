import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/puzzle-party-%E2%80%94-milan-cathedral-edition/tgH_i6UkxdQsdg');
  await page.getByRole('button', { name: 'Launch experiment' }).click();
});