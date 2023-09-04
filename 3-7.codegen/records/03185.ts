import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://commerce-connections.com/');
  await page.goto('https://commerce-connections.com/news-detail/new-beginnings-our-exciting-move-to-a-brand-new-office');
  await page.goto('https://commerce-connections.com/');
});