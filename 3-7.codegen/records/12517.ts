import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://me-fui-de-vacaciones-bad-bunny-z6.mp3veo.org/');
});