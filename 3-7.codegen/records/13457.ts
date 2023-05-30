import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://noel.heschung.com/en/?dark');
  await page.goto('https://noel.heschung.com/en/chapitre/les-debuts-de-l-aventure');
  await page.goto('https://noel.heschung.com/en/chapitre/les-debuts-de-l-aventure/');
});