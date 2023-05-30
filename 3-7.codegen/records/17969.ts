import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://virtual-tours.com.au/ppwcma/rhyll/');
  await page.locator('div:nth-child(18) > div:nth-child(10)').click();
  await page.locator('div:nth-child(19) > div:nth-child(8)').click();
  await page.locator('div:nth-child(20) > div:nth-child(9)').click();
  await page.getByText('Walk 2Walk 2Bush Dunny Bush Dunny Womin jeka to MillowlWomin jeka to MillowlIntr').click();
  await page.getByText('Walk 2Walk 2Bush Dunny Bush Dunny Womin jeka to MillowlWomin jeka to MillowlIntr').click();
  await page.getByText('Walk 2Walk 2Bush Dunny Bush Dunny Womin jeka to MillowlWomin jeka to MillowlIntr').click();
  await page.locator('div:nth-child(19) > div:nth-child(8)').click();
  await page.locator('div:nth-child(20) > div:nth-child(8)').click();
  await page.locator('div:nth-child(20) > div:nth-child(10)').click();
  await page.locator('div:nth-child(20) > div:nth-child(10)').click();
  await page.locator('div:nth-child(20) > div:nth-child(8)').click();
  await page.locator('div:nth-child(21) > div:nth-child(12)').click();
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
});