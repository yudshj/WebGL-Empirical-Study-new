import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.universityrifle.org/');
  await page.goto('https://www.universityrifle.org/?__cf_chl_rt_tk=4KrhsriOgyHMu34NvoCsEFpDinxQpPctD_svnM7rNJA-1688049732-0-gaNycGzNC2U');
  await page.goto('https://www.universityrifle.org/');
});