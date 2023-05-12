import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.curateentertainment.com/');
  await page.getByRole('button', { name: 'Explore' }).click();
});