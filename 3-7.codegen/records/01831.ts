import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://self-scenter.comme-des-garcons-parfum.com/');
  await page.goto('http://self-scenter.comme-des-garcons-parfum.com/en');
});