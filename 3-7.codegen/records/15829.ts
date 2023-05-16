import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://shoutagainstviolence.com/');
  await page.getByRole('button', { name: 'LIVE THIS STORY' }).click();
  await page.getByRole('button', { name: 'skip' }).click();
});