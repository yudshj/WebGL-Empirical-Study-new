import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://flywithkarolg.atspotify.com/');
  await page.getByText('KG0516 Karol GSTART EXPERIENCELegalLegalPrivacy CenterPrivacy Center© 2021 Spoti').click();
  await page.locator('#Stage').click();
  await page.locator('#Stage').click();
});