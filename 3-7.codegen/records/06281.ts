import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://cai-chan.mystrikingly.com/');
  await page.locator('div:nth-child(5) > .clearfix > div > .s-item-media-wrapper > .s-item-media-group > .s-component > div > .s-component-content > div > .s-ratio-box > .s-img-wrapper > .crop-default').click();
  await page.getByRole('link', { name: ' Create a site with Strikinglyで作成されたサイトです。 今日、自分のサイトを製作する！' }).click();
});