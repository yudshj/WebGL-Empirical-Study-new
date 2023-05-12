import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://constructor.atrix77.ru/');
  await page.goto('http://constructor.atrix77.ru/site/constructor');
});