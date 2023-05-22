import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://meble-dreams.pl/');
  await page.goto('https://meble-dreams.pl/portfolio/360/');
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.locator('#dtcontainer_1').getByText('+').click();
  await page.locator('#dtcontainer_1').getByText('+').click({
    clickCount: 4
  });
  await page.locator('#dtcontainer_1').getByText('+').click();
});