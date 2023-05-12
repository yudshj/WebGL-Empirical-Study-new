import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://newworld-preview-0521.dev.60fps.fr/en-us/');
  await page.getByRole('button', { name: 'Explore' }).click();
});