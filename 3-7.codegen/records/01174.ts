import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://lasenoritacasarural.com/');
  await page.frameLocator('#post-2 iframe').locator('[id="\\37 "]').getByRole('img').click();
  await page.frameLocator('#post-2 iframe').locator('[id="\\37 "]').getByRole('img').click();
  await page.frameLocator('#post-2 iframe').locator('[id="\\36 "]').getByRole('img').click();
  await page.frameLocator('#post-2 iframe').locator('[id="\\37 "]').getByRole('img').click();
  await page.locator('.wds_right-ico_0 > .fa').click();
  await page.locator('.wds_right-ico_0 > .fa').click();
  await page.locator('.wds_right-ico_0 > .fa').click();
  await page.locator('.wds_left-ico_0 > .fa').click();
});