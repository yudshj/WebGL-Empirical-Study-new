import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://dillasdonuts.shop/');
  await page.locator('div').filter({ hasText: 'J Dilla - Donuts Loading the experience...100%' }).getByRole('img').nth(1).click();
  await page.getByText('PLAY / RECORD').click();
  await page.getByText('One Eleven', { exact: true }).click();
  await page.getByText('PLAY / RECORD').click();
  await page.getByText('XShare Copied to clipboardAboutCredits Back See sample data Volume =============').click();
  await page.getByText('XShare Copied to clipboardAboutCredits Back See sample data Volume =============').click();
  await page.getByText('XShare Copied to clipboardAboutCredits Back See sample data Volume =============').dblclick();
  await page.getByText('XShare Copied to clipboardAboutCredits Back See sample data Volume =============').click();
  await page.getByText('PLAY / RECORD').click();
  await page.getByText('XShare Copied to clipboardAboutCredits Back See sample data Volume =============').click();
  await page.getByText('XShare Copied to clipboardAboutCredits Back See sample data Volume =============').click();
});