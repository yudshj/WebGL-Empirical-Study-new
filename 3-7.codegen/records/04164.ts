import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://2019.lesanimals.digital/en');
  await page.locator('#cursor').click();
  await page.getByText('Hold the spacebar').first().click();
  await page.keyboard.press(' ', { delay: 10_000 });
});