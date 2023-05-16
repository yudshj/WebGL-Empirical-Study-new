import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://wilcon.com.ph/vrstoreexperience/');
  await page.frameLocator('iframe[name="Wilcon Depot "]').locator('[id="\\32 5"] > div:nth-child(2) > div > div').click();
});