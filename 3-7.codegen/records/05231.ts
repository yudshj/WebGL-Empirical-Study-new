import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/visual-crosswords-with-david-kwong/QQEsZUk4houiLQ');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Start' }).click();
});