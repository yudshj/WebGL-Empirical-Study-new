import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://www.itsamessage.com/halloween2014/');
  await page.goto('http://www.itsamessage.com/halloween2014/#NNuTwxH');
});