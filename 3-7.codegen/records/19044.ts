import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.aminer.cn/pub/620b19c35aee126c0f7e6755/bifsmn-binary-neural-network-for-keyword-spotting?s=social');
});