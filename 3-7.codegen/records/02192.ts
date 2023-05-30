import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://weatherking.3dshedbuilder.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Live Preview' }).click();
  const page1 = await page1Promise;
  await page1.locator('.sm_state_NE').click();
  await page1.locator('div').filter({ hasText: /^Deluxe Lofted Barn Cabin$/ }).locator('a').click();
  await page1.locator('#cbp-spmenu-s1').getByRole('button', { name: 'Next' }).click();
  await page1.locator('.length_item_slider > span > .irs > .irs-line > .irs-line-right').click();
  await page1.locator('#cbp-spmenu-s2').getByRole('button', { name: 'Next' }).click();
  await page1.getByRole('button', { name: 'Standard Metal' }).click();
  await page1.getByRole('listitem').filter({ hasText: 'Fern Green' }).locator('span').click();
  await page1.locator('#roof-menu').getByRole('button', { name: 'Next' }).click();
  await page1.getByRole('button', { name: 'Stain' }).click();
  await page1.locator('#siding-menu').getByRole('button', { name: 'Next' }).click();
  await page1.locator('#cbp-spmenu-s5').getByRole('button', { name: 'Stain' }).click();
  await page1.locator('#trim-menu').getByRole('button', { name: 'Next' }).click();
  await page1.mouse.wheel(0, -100);
  await page1.mouse.wheel(0, -100);
  await page1.mouse.wheel(0, -100);
});