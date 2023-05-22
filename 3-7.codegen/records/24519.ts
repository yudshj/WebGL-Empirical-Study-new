import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.mitosushi.pl/');
  await page.getByText('Enter').click();
  await page.getByText('skip intro').click();
  await page.locator('div:nth-child(2) > div:nth-child(2) > div:nth-child(2)').click();
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.locator('.ggskin > div:nth-child(2) > div:nth-child(2)').first().click();
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.locator('div:nth-child(2) > div:nth-child(2) > div:nth-child(2)').click();
});