import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.corsair.com/custom-cooling-configurator/');
  await page.frameLocator('internal:text="Request unsuccessful. Incapsula incident ID: 1308000860005010289-184992359784175"i').frameLocator('iframe[name="a-y1ma43hd9k3l"]').getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.frameLocator('internal:text="Request unsuccessful. Incapsula incident ID: 1308000860005010289-184992359784175"i').frameLocator('iframe[name="c-y1ma43hd9k3l"]').locator('td:nth-child(3)').first().click();
  await page.frameLocator('internal:text="Request unsuccessful. Incapsula incident ID: 1308000860005010289-184992359784175"i').frameLocator('iframe[name="c-y1ma43hd9k3l"]').locator('tr:nth-child(2) > td').first().click();
  await page.frameLocator('internal:text="Request unsuccessful. Incapsula incident ID: 1308000860005010289-184992359784175"i').frameLocator('iframe[name="c-y1ma43hd9k3l"]').locator('tr:nth-child(3) > td:nth-child(2)').click();
  await page.frameLocator('internal:text="Request unsuccessful. Incapsula incident ID: 1308000860005010289-184992359784175"i').frameLocator('iframe[name="c-y1ma43hd9k3l"]').locator('tr:nth-child(2) > td').first().click();
  await page.frameLocator('internal:text="Request unsuccessful. Incapsula incident ID: 1308000860005010289-184992359784175"i').frameLocator('iframe[name="c-y1ma43hd9k3l"]').locator('tr:nth-child(3) > td:nth-child(2)').click();
});