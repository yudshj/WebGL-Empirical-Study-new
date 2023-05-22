import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://pinwheels.preventchildabuse.org/');
  await page.getByRole('button', { name: 'Enter the garden Enter the garden' }).click();
});