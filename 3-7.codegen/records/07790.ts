import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://diversemarketing.markettime.com/');
  await page.locator('ngx-slick-carousel').filter({ hasText: 'PreviousAccessoriesApparelBaby & ToddlerBeauty & WellnessCollectibles & Gifts Cr' }).getByRole('button', { name: 'Next' }).click();
  await page.locator('ngx-slick-carousel').filter({ hasText: 'PreviousAccessoriesApparelBaby & ToddlerBeauty & WellnessCollectibles & Gifts Cr' }).getByRole('button', { name: 'Previous' }).click();
  await page.locator('ngx-slick-carousel').filter({ hasText: 'PreviousNEBIBOMIXYstickeepalsSunny Days Entertainment, LLCHandstand KitchenFoxMi' }).getByRole('button', { name: 'Next' }).click();
});