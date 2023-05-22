import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://github.com/champierre/handpose2scratch');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'https://github.com/champierre/handpose2scratch/raw/master/sample_projects/handpose.sb3' }).click();
  const download = await downloadPromise;
  await page.getByRole('link', { name: 'https://champierre.github.io/handpose2scratch' }).click();
  await page.goto('https://champierre.github.io/handpose2scratch/');
});