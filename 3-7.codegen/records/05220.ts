import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/puzzle-party-%E2%80%94-czechia-edition/QwGJ7pISY7uZ2Q');
  await page.getByRole('button', { name: 'Launch experiment' }).click();
  await page.frameLocator('iframe').locator('[id="\\31 "]').click();
});