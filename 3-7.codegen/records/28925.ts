import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://yahorngtaiwan.en.taiwantrade.com/');
  await page.getByRole('link', { name: 'No' }).click();
  await page.frameLocator('#homeRowBlockStage_282441 iframe').getByText('VR SetupExit VR').click();
  await page.frameLocator('#homeRowBlockStage_282441 iframe').getByText('YA HORNG ELECTRONIC CO., LTD was established in 1972. During past 4 decades, YA ').first().click();
  await page.frameLocator('#homeRowBlockStage_282441 iframe').getByRole('button', { name: 'Close' }).click();
  await page.mouse.wheel(0, -100);
});