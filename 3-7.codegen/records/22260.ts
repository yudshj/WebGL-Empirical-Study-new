import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.graffiticreator.net/');
  await page.goto('https://www.graffiticreator.net/htm/mobile.html');
  await page.goto('https://www.customgraffiti.net/');
});