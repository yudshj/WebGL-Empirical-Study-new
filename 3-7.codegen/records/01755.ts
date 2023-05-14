import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://ringo-applepie.com/fuuringo/');
  await page.getByRole('link', { name: 'START!!' }).click();
});