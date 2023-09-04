import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://radioaswat.ma/emission/%d9%85%d9%88%d8%b3%d9%8a%d9%82%d9%89/');
});