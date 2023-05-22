import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://poloclub.github.io/ganlab/');
  await page.getByRole('button', { name: 'play_arrow' }).click();
});