import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.dallara.it/dlr-en/dallara-stradale-en/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zi_f2dTTwsTAz8_QPMLA0CDQM8Qwy93Y3cDUz1w8EKDHAARwP9KGL041EQhd_4cP0ofFZYeBtAFeAxoyA3NMIg01ERAJ8FibM!/dz/d5/L2dBISEvZ0FBIS9nQSEh/');
  await page.goto('https://www.dallara.it/');
});