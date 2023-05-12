import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://staratlas.com/');
  await page.locator('#SiteWrapper div').filter({ hasText: 'Trailer Join Now .stCross{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;} Vid' }).getByRole('link', { name: 'Trailer' }).click();
});