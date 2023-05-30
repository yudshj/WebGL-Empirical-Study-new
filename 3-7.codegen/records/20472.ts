import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.conceptarts.com/featured');
  await page.locator('div').filter({ hasText: /^View CampaignJurassic World DominionUniversal01\/09$/ }).first().click();
  await page.mouse.move(100, 100);
});