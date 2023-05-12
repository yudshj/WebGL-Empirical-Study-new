import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/guess-the-line/ogH0ouxdq_sR6w');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Play' }).click();
});