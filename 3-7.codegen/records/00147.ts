import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://andalusway.blogspot.com/search/label/%D8%A7%D9%84%D8%A3%D9%86%D8%AF%D9%84%D8%B3%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%B5%D8%B1%D8%A9');
});