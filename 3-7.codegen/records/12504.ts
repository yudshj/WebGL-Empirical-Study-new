import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://mcscarpets.stepinside.ie/');
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.locator('div:nth-child(22) > div > div:nth-child(5)').click();
  await page.locator('div:nth-child(22) > div > div:nth-child(4)').click();
  await page.locator('div:nth-child(22) > div > div:nth-child(6)').click();
  await page.locator('div:nth-child(22) > div > div:nth-child(7)').click();
  await page.getByText('White RiverWhite RiverIn August 2019 MCS Carpets won the ‘The Irish Independent ').click();
  await page.locator('div:nth-child(3) > div:nth-child(3) > div').click();
  await page.getByText('White RiverWhite RiverIn August 2019 MCS Carpets won the ‘The Irish Independent ').click();
  await page.locator('div:nth-child(20) > div').first().click();
  await page.locator('div:nth-child(20) > div:nth-child(2)').click();
  await page.getByText('White RiverWhite RiverIn August 2019 MCS Carpets won the ‘The Irish Independent ').click();
});