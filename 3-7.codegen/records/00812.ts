import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://gaesigner.com/four_seasons');
  await page.goto('http://gaesigner.com/four_seasons/?ckattempt=1');
  await page.getByRole('button', { name: 'Play Four Seasons' }).click();
});