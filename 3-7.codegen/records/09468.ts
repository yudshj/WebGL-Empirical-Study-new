import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://github.com/bengfarrell/paperdoll');
  await page.getByRole('link', { name: 'https://bengfarrell.github.io/paperdoll' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'S Camera 18 N Take Photo' }).click();
  const download = await downloadPromise;
});