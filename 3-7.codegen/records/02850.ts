import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.gengli.com/');
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.frameLocator('iframe >> nth=0').locator('div:nth-child(4) > div:nth-child(2)').first().click();
  await page.frameLocator('iframe >> nth=0').locator('div:nth-child(4) > div:nth-child(3)').click();
  await page.frameLocator('iframe >> nth=0').locator('div:nth-child(4) > div:nth-child(4)').click();
  await page.frameLocator('iframe >> nth=0').locator('div:nth-child(3) > div > div:nth-child(5)').first().click();
  await page.frameLocator('iframe >> nth=0').getByText('HideFreshPublishExit VRVR Setup0:00 / 0:00GateOffice BuildingTest SiteAssembly W').click();
  await page.frameLocator('iframe >> nth=0').locator('div').filter({ hasText: /^Exit VR$/ }).first().click();
});