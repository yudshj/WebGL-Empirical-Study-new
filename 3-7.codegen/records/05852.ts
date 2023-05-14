import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://blastgalaxy.nl/blast-galaxy/');
  await page.getByRole('button', { name: 'Yes' }).click();
});