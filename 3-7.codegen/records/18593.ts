import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.11teamsports.com/de-de/euro-2016/adidas-dfb/');
  await page.goto('https://www.11teamsports.com/de-de/euro-2016/adidas-dfb/?__cf_chl_rt_tk=ycsAXqhiMPtxieTR3QWYay62cha9D_YL83kSOM68.Xw-1687961311-0-gaNycGzNC7s');
  await page.goto('https://www.11teamsports.com/de-de/euro-2016/adidas-dfb/');
});