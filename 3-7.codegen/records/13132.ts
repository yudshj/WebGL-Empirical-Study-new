import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://mymodelrobot.appspot.com/');
  await page.goto('https://mymodelrobot.appspot.com/5629499534213120');
});