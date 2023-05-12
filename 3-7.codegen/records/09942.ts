import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://hello-tensorflow.glitch.me/');
  await page.getByRole('button', { name: 'Learn!' }).click();
  await page.getByRole('button', { name: 'Learn!' }).click();
});