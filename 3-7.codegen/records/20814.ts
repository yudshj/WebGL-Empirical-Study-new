import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.delysium.com/whitepaper');
  await page.getByText('Press any key to start').click();
  await page.keyboard.press('d', { delay: 1000 });
});