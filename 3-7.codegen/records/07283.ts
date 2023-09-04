import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://cryptopolisgame.com/');
  await page.goto('https://cryptopolisgame.com/?__cf_chl_rt_tk=iOP1zjOkO3gpC921ED75ACk5VYtoIp1Za7JfLkG_FIA-1687953122-0-gaNycGzNC2U');
  await page.goto('https://cryptopolisgame.com/');
  await page.goto('https://cryptopolisgame.com/?__cf_chl_rt_tk=DUE0ioy2VIi.tSza7CkW8OpHmqyoaR2cA_v7qNZ7uwQ-1687953246-0-gaNycGzNChA');
  await page.goto('https://cryptopolisgame.com/');
  await page.frameLocator('iframe[title="Widget containing a Cloudflare security challenge"]').getByLabel('Verify you are human').check();
  await page.goto('https://cryptopolisgame.com/');
  await page.goto('https://cryptopolisgame.com/?__cf_chl_rt_tk=oktAFJKv3PlFFwiGkWsr.HZVQeUifTI.uoV0L23kbD0-1687953308-0-gaNycGzNChA');
  await page.goto('https://cryptopolisgame.com/');
});