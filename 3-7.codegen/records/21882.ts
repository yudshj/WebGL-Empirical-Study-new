import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.futurelibrary.no/');
  await page.getByText('Enter').click();
  await page.locator('._BackButton > div').first().click();
  await page.getByText('Enter').click();
  await page.getByText('EXPLORETHE AUTHORS').click();
  await page.locator('._BackButton > div').first().click();
});