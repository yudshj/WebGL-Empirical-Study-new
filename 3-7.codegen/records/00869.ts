import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://globe.cid.harvard.edu/');
  await page.locator('#beginStory').getByRole('img').click();
});