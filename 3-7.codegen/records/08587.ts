import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ezcustom.victas.com/');
  await page.goto('https://ezcustom.victas.com/Simulator');
});