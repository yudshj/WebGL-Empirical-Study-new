import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.cyberbrokers.com/');
  await page.locator('div').filter({ hasText: 'CyberBrokers is building a captivating universe through beautiful collectibles, ' }).nth(3).click();
});