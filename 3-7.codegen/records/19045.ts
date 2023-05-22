import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.aminer.cn/pub/623be1965aee126c0f37aafc/visual-prompt-tuning?s=social');
});