import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://bandit.rip/');
  await page.getByText('PLAY PLAY PLAY').click();
  await page.locator('.fgm-class-square').first().click();
  await page.getByText('Click to Spawn').click();
});